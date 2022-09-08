# discord-premium-system

Discord botlarınız için basit ve gelişmiş premium sistemi. Kod oluşturduktan sonra kodu kullanan kişiye otomatik premium veren sistem. Discord.js V14 ile hazırlanmıştır ve `Slash` komutları kullanmaktadır eğer prefixli halinin gelmesini isterseniz [Discord sunucuma](https://discord.gg/V8ux7FvDQP) gelerek isteğinizi belirtebilirsiniz. Bir hata bulma durumunda [wurathh#0001](https://discord.com/users/465978185281044481)'a bildirebilirsiniz.

## Komutlar

- `/premium-kod-kullan` => Oluşturmuş olduğunuz premium kodunu kullanmak için gerekli komut.
- `/premium-kod-oluştur` => Premium kodu oluşturma komutu.
- `/premium-kod-sil` => Oluşturmuş olduğunuz premium kodunu silmek için gerekli komut.
- `/premium-üye-çıkar` => Premium üyeliği olan kullanıcıları premiumdan çıkarırsınız.
- `/premium-komut` => Premium kullanıcıların kullanabilceği komut.
- `/normal-komut` => Herkesin kullanabileceği komut.

## Gerekli Uygulamalar

- [Node](https://nodejs.org/en/) - 16 Sürümü ve daha yükseği
- [Discord.js](https://discord.js.org/) - V14 Sürümü

## Kurulum

```bash
# Dosyaları indirmek için:
git clone https://github.com/wurathh/discord-premium-system/
# Mödülleri indirmek için:
npm install
```

## Başlatma

- Botu başlatmadan önce `config.js`'yi doldurduğunuzdan emin olun, doldurmadığınız kısımlar yüzünden bot çalışmayabilir.

```bash
node index.js
```

## Hatalar

- `Premium kanal logu ayarlanmamış!` => `config.js` deki log kısmına botun premium loglarını atacağı kanalın idsini koyunuz.
- `TOKEN INVALID` => Botunuza girmiş olduğunuz token hatalı veya yanlıştır [Discord Developer Portal](https://discord.dev/) adresinden uygulamalarım kısmına tıkladıktan sonra botunuzu seçiniz ve **BOT** kısmına tıklayın, reset token dedikten sonra `config.js` deki token kısmına yapıştırın. Bunları yaptıktan sonra hatanız çözülecektir.

## Hakkında

- Botu kullanmanızda herhangi bir sakınca yoktur fakat botu kendim yaptım diyerek paylaşmak yasaktır.
- Herhangi bir sorununuzda [Discord sunucuma](https://discord.gg/V8ux7FvDQP) gelebilirsiniz.
