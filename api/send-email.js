// Vercel Function for email sending
const nodemailer = require('nodemailer');

// 環境変数の設定 (Vercelにデプロイする際に設定)
// SMTP_HOST: SMTPサーバーホスト
// SMTP_PORT: SMTPサーバーポート
// SMTP_USER: SMTPユーザー名
// SMTP_PASS: SMTPパスワード
// EMAIL_TO: 受信者のメールアドレス
// EMAIL_FROM: 送信者のメールアドレス

module.exports = async (req, res) => {
  // CORSヘッダーを設定
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // OPTIONSリクエスト（プリフライトリクエスト）に対応
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // POSTメソッド以外は拒否
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // リクエストボディの取得
    const { name, email, subject, message, csrf_token } = req.body;

    // バリデーション
    if (!name || !email || !message) {
      return res.status(400).json({ error: '必要な情報が不足しています' });
    }

    // デバッグ情報をログに出力
    console.log('SMTP設定:', {
      host: process.env.EMAIL_HOST || process.env.SMTP_HOST || 'transformnavi.sakura.ne.jp',
      port: parseInt(process.env.EMAIL_PORT || process.env.SMTP_PORT || '465'),
      secure: true,
      user: process.env.EMAIL_USER || process.env.SMTP_USER || 'form_submit@transformnavi.jp',
    });

    // トランスポーターの作成
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || process.env.SMTP_HOST || 'transformnavi.sakura.ne.jp',
      port: parseInt(process.env.EMAIL_PORT || process.env.SMTP_PORT || '465'),
      secure: true, // port 465では通常secure: trueが必要
      debug: true,
      auth: {
        user: process.env.EMAIL_USER || process.env.SMTP_USER || 'form_submit@transformnavi.jp',
        pass: process.env.EMAIL_PASS || process.env.SMTP_PASS,
      },
    });

    // メールの内容
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'form_submit@transformnavi.jp',
      to: process.env.EMAIL_TO || 'contact@transformnavi.jp',
      subject: `お問い合わせ: ${subject || '件名なし'}`,
      text: `
名前: ${name}
メールアドレス: ${email}
件名: ${subject || '件名なし'}

メッセージ:
${message}

CSRF Token: ${csrf_token}
`,
      html: `
<h3>お問い合わせがありました</h3>
<p><strong>名前:</strong> ${name}</p>
<p><strong>メールアドレス:</strong> ${email}</p>
<p><strong>件名:</strong> ${subject || '件名なし'}</p>
<p><strong>メッセージ:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
`,
    };

    // メール送信のテスト
    console.log('メール送信開始...');
    
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('メール送信成功:', info);
      
      // 成功レスポンス
      return res.status(200).json({ message: '送信が完了しました', messageId: info.messageId });
    } catch (sendError) {
      console.error('メール送信中の詳細エラー:', sendError);
      throw new Error(`メール送信失敗: ${sendError.message}`);
    }
  } catch (error) {
    console.error('メール送信エラー:', error);
    // エラーの詳細情報をレスポンスに含める
    return res.status(500).json({ 
      error: 'メール送信に失敗しました', 
      message: error.message,
      code: error.code || 'UNKNOWN'
    });
  }
};
