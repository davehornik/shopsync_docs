# Nové sazby DPH na Slovensku

Tento návod je určen pouze pro **slovenské firmy**.

Pokud pouze fakturujete na Slovensko v rámci OSS režimu nebo máte druhou registraci k DPH, postačí nastavit správně sazby v e-shopu a účetním softwaru.

---

## 🖥️ Desktopová aplikace

### Kde změnit sazby DPH:

1. Spusťte `shopsync.exe`
2. V hlavním okně přejděte do části **Nastavení účetního SW** nebo **Připojení k IS**
3. Zadejte nové sazby DPH:

- **Základní sazba**: `23`
- **Snížená sazba**: `19`
- **Třetí sazba**: `5`

![Nastavení sazeb DPH v aplikaci ShopSync](https://helpdesk.esync.cz/en/download/f2d31bf2138639de4d28bd1452c84d42be0b7a7f50e8815ce1c087e2ac3d631b1226fcc8927798d2?t=d3b462fc7c4b2267c4d09323db0b1609)

Tyto hodnoty budou následně propsány i do XML souborů zasílaných do Pohody.

---

## 🌐 Webová aplikace

V souboru `config.php` upravte následující proměnné:

```php
define("set_vat", 23);
define("set_vatlow", 19);
define("set_vatthird", 5);
```

![Ukázka nastavení ve webové aplikaci](https://helpdesk.esync.cz/en/download/07edf6fc3d8adce644cf41bcd585c08ab1ad8bfbb2d78a51d4b9096407f54b12d18bcb50306a658b?t=f2e5c6828444ed7d396350d9889b5858)

> ⚠️ Ujistěte se, že nepřepisujete hodnoty z `.env` nebo z jiného načítaného konfiguračního zdroje.

---

## 🛒 Daňové třídy v e-shopu

### Shoptet / Upgates / CreativeSites / Base

- Není třeba upravovat ID daňové třídy, import funguje na základě hodnot z objednávky.

### Prestashop / WooCommerce / Opencart

- V případě změny ID daňové třídy je třeba:
  - upravit ID daňové třídy v konfiguraci aplikace
  - upravit nastavení můstku na FTP
  - případně **spustit reset přenosu změn**

---

Máte-li nejasnosti, neváhejte kontaktovat naši podporu: **podpora@shopsync.cz**