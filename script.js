function showPage(page) {
    let content = document.getElementById("page-content");

    if (page === 'ekolojik-kredi') {
        content.innerHTML = `
            <h2>Ekolojik Kredi Nedir?</h2>
            <p>Ekolojik Kredi, çevre bilinci oluşturmak ve geri dönüşüm faaliyetlerini teşvik etmek amacıyla geliştirilmiş bir ödül sistemidir. Öğrenciler ve okullar, geri dönüşüm yaparak puan kazanır ve bu puanlar çeşitli ödüllerle değiştirilebilir.</p>
        `;
    } else if (page === 'hazirlayanlar') {
        content.innerHTML = `
            <h2>Hazırlayanlar</h2>
            <p>Danışman Öğretmen: Osman Onuk</p>
            <p>Öğrenciler:</p>
            <ul>
                <li>Muhammedcan Arslanparçası</li>
                <li>Bilal Yiğit Tezcan</li>
                <li>Yağız Efe Yılmaz</li>
            </ul>
        `;
    } else if (page === 'geri-donusum') {
        content.innerHTML = `
            <h2>Geri Dönüşüm Nedir?</h2>
            <p>Geri dönüşüm, atıkların tekrar işlenerek hammaddeye dönüştürülmesi işlemidir. Plastik, kağıt, cam ve metal gibi malzemeler geri dönüştürülebilir ve doğaya zararı azaltılır. Geri dönüşüm, çevre kirliliğini azaltmaya yardımcı olur ve doğal kaynakların korunmasını sağlar.</p>
        `;
    } else if (page === 'bize-ulasin') {
        content.innerHTML = `
            <h2>Bize Ulaşın</h2>
            <p>İletişim için <a href="mailto:info@ekologik.com">info@ekologik.com</a> adresine e-posta gönderebilirsiniz.</p>
        `;
    } else if (page === 'kayit') {
        content.innerHTML = `
            <h2>Kaydol</h2>
            <p>Lütfen kaydınızı yapın.</p>
            <button onclick="showPage('ogrenci-kaydi')">Öğrenci Kaydı</button>
            <button onclick="showPage('okul-kaydi')">Okul Kaydı</button>
        `;
    } else if (page === 'ogrenci-kaydi') {
        content.innerHTML = `
            <h2>Öğrenci Kaydı</h2>
            <form>
                <label for="studentName">Adı:</label><br>
                <input type="text" id="studentName" required><br>
                <label for="studentSurname">Soyadı:</label><br>
                <input type="text" id="studentSurname" required><br>
                <label for="studentNumber">Öğrenci Numarası:</label><br>
                <input type="number" id="studentNumber" required><br>
                <label for="studentEmail">E-posta:</label><br>
                <input type="email" id="studentEmail" required><br>
                <label for="studentClass">Sınıf:</label><br>
                <input type="text" id="studentClass" required><br>
                <button type="submit">Kaydı Tamamla</button>
            </form>
        `;
    } else if (page === 'okul-kaydi') {
        content.innerHTML = `
            <h2>Okul Kaydı</h2>
            <form>
                <label for="schoolName">Okul Adı:</label><br>
                <input type="text" id="schoolName" required><br>
                <label for="schoolProvince">İl:</label><br>
                <input type="text" id="schoolProvince" required><br>
                <label for="schoolDistrict">İlçe:</label><br>
                <input type="text" id="schoolDistrict" required><br>
                <label for="schoolPassword">Şifre:</label><br>
                <input type="password" id="schoolPassword" required><br>
                <button type="submit">Kaydı Tamamla</button>
            </form>
        `;
    } else if (page === 'veri-goruntuleme') {
        content.innerHTML = `
            <h2>Veri Görüntüleme</h2>
            <form>
                <label for="studentEmail">E-posta:</label><br>
                <input type="email" id="studentEmail" required><br>
                <label for="studentId">Öğrenci Numarası:</label><br>
                <input type="number" id="studentId" required><br>
                <button type="submit">Verileri Görüntüle</button>
            </form>
        `;
    } else if (page === 'veri-giris') {
        content.innerHTML = `
            <h2>Veri Girişi</h2>
            <form>
                <label for="schoolName">Okul Adı:</label><br>
                <input type="text" id="schoolName" required><br>
                <label for="schoolPassword">Okul Şifresi:</label><br>
                <input type="password" id="schoolPassword" required><br>
                <button type="submit">Giriş Yap</button>
            </form>
        `;
    }
}
