# LegalShieldMarket

Checklist To Deploy New LSP Site

1. Change information in associate.js.
2. Create new Heroku Account with Verified Card Settings to Client.
3. Create process.env settings on new Heroku deployment to mailer email and login.
4. Setup mailer using gmail account, turn on use of less secure apps in gmail settings or use alternative email           through domain.
    - Make sure associates.js's data.sendFrom and process.env.AUTO_EMAIL_USER in Heroku Config Vars match and that process.env.AUTO_EMAIL_PASS is the correlating password to that email account.
5. Deploy to Heroku Account.
6. Set account to Hobby with ACM or leave unsecure depending on payment amount.
7. Remove requireHTTPS from middleware on server.js if not using HTTPS
8. Set custom domain and forward with CNAME Record.
9. Forward naked domain to www.nakeddomain.com
10. 