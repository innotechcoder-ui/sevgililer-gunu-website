# 💕 Sevgililer Günü Website

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</div>

## 🎉 Proje Hakkında

Sevgililer Günü için özel olarak tasarlanmış, modern ve romantik bir website! Sevgilinizi, eşinizi veya sevdiklerinizi şaşırtmak için mükemmel bir dijital hediye.

### ✨ Öne Çıkan Özellikler

- 💖 **Uçan Kalp Animasyonları**: Sürekli hareket eden romantik kalpler
- 🎨 **Özel Tasarım**: Pembe-kırmızı gradient arka planlar
- 💌 **Aşk Mesajları**: 4 farklı kategoride romantik kartlar
- ⏰ **Canlı Geri Sayım**: 14 Şubat'a kalan süre (gün, saat, dakika, saniye)
- ✉️ **Aşk Mektubu Bölümü**: Kişiselleştirilebilir mesaj alanı
- 📱 **Tam Responsive**: Mobil, tablet ve masaüstünde mükemmel görünüm
- 🎭 **İnteraktif Animasyonlar**: Hover efektleri ve geçişler
- 🎯 **Kalp Cursor**: Özel kalp şeklinde mouse imleci

## 🚀 Hızlı Başlangıç

### Gereksinimler

- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server Eklentisi](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Modern bir web tarayıcı (Chrome, Firefox, Safari, Edge)

### Kurulum Adımları

1. **Projeyi İndir**
   ```bash
   # ZIP olarak indir ve çıkart
   # veya Git kullanıyorsan:
   git clone https://github.com/innotechcoder-ui/sevgililer-gunu-website.git
   ```

2. **VS Code'da Aç**
   ```bash
   cd sevgililer-gunu-website
   code .
   ```

3. **Live Server Kur**
   - VS Code'da `Ctrl+Shift+X` (Extensions)
   - "Live Server" ara
   - Ritwick Dey'in eklentisini kur

4. **Çalıştır**
   - `index.html` dosyasını aç
   - Sağ alt köşede "Go Live" butonuna tıkla
   - Tarayıcıda otomatik açılır! 🎉

## 📁 Proje Yapısı

```
sevgililer-gunu-website/
│
├── index.html              # Ana HTML dosyası
├── assets/
│   ├── style.css          # Tüm CSS stilleri
│   ├── script.js          # JavaScript kodları
│   └── images/
│       └── heart.svg      # Kalp ikonu
└── README.md              # Bu dosya
```

## 🎨 Kişiselleştirme Rehberi

### Renkleri Değiştir

`assets/style.css` dosyasının başındaki değişkenleri düzenle:

```css
:root {
    --rose: #FF6B9D;        /* Ana pembe ton */
    --deep-rose: #C44569;   /* Koyu pembe */
    --blush: #FFC1CC;       /* Açık pembe */
    --cream: #FFF5F7;       /* Krem arka plan */
}
```

### Mesajları Özelleştir

`index.html` dosyasındaki mesaj kartlarını düzenle:

```html
<div class="message-card">
    <span class="message-icon">💝</span>
    <h3 class="message-title">Senin Başlığın</h3>
    <p class="message-text">"Senin mesajın buraya..."</p>
</div>
```

### Tarihi Değiştir

`assets/script.js` dosyasındaki tarih satırını güncelle:

```javascript
const valentinesDay = new Date('2026-02-14T00:00:00').getTime();
// İstediğin tarihe çevir: '2027-02-14T00:00:00'
```

### Aşk Mektubunu Düzenle

`index.html` dosyasında:

```html
<div class="letter-content">
    <p>Sevgilim,</p>
    <p style="margin-top: 2rem;">
        Buraya kendi mesajını yaz...
    </p>
    <div class="signature">İsmin ♥</div>
</div>
```

## 💻 Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| **HTML5** | Sayfa yapısı ve semantik etiketler |
| **CSS3** | Animasyonlar, gradientler, responsive tasarım |
| **JavaScript** | Geri sayım sayacı, animasyonlar, interaktivite |
| **Google Fonts** | Playfair Display ve Cormorant Garamond fontları |

## 🎯 Özellikler Detayları

### Animasyonlar
- ✅ Uçan kalpler (sürekli hareket)
- ✅ Fade-in efektleri
- ✅ Hover animasyonları
- ✅ Pulse efekti (başlık)
- ✅ Float efekti (tarih kartı)
- ✅ Parallax scroll

### Responsive Tasarım
- ✅ Mobil (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1440px+)

## 💡 İpuçları

- 🎨 **Renk Paleti Değiştir**: Farklı temalar için renkleri değiştir
- 📝 **Fotoğraf Ekle**: Sevgilinizin fotoğrafını ekleyebilirsin
- 🎵 **Müzik Ekle**: HTML5 audio tag ile arka plan müziği
- 📱 **QR Kod**: Site linkini QR kod'a çevir, hediye kartına ekle

## 🎁 Kullanım Senaryoları

- 💝 Sevgilinize dijital hediye
- 💍 Evlilik teklifi sayfası
- 🎂 Yıldönümü sürprizi
- 💌 Uzaktan mesaj gönderme
- 🎉 Özel gün kutlaması

## 🐛 Sorun mu Var?

Eğer bir hata bulursan veya öneride bulunmak istersen:
- Issue aç
- Pull request gönder
- Sosyal medyadan ulaş

## 🤝 Katkıda Bulunma

Katkılarını bekliyorum! 

1. Fork'la
2. Feature branch oluştur (`git checkout -b yeni-ozellik`)
3. Commit'le (`git commit -m 'Yeni özellik eklendi'`)
4. Push'la (`git push origin yeni-ozellik`)
5. Pull Request aç

## 📱 Sosyal Medya

- Instagram: [@innotechcoder](https://instagram.com/innotechcoder)
- GitHub: [@innotechcoder-ui](https://github.com/innotechcoder-ui)

Beğendiysen ⭐ vermeyi unutma!

## 📄 Lisans

Bu proje MIT lisansı altındadır. İstediğin gibi kullanabilir, değiştirebilir ve paylaşabilirsin!

## ❤️ Teşekkürler

Bu projeyi kullandığın için teşekkürler! Umarım sevdiklerinizi mutlu edersin 💕

---

<div align="center">
  <strong>💕 Sevgiyle kodlandı</strong>
  <br>
  <sub>Sevgililer Günü 2026</sub>
</div>
