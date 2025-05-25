---
id: cswautomatic-nastaveni
title: Nastavení modulu CSWAutomatic pro import do Money
sidebar_label: Nastavení CSWAutomatic
---

Tento návod slouží ke správnému nastavení importu objednávek z XML souborů pomocí modulu `CSWAutomatic` ve Money S4/S5.

---

## 1️⃣ Zkontrolujte, zda běží služba *CSWAutomatic*

Otevřete `services.msc` a zkontrolujte, že služba **CSWAutomatic** je ve stavu **Running** a spouští se automaticky.

![services.msc](./img/cswautomatic-step1.png)

---

## 2️⃣ Udělejte kopii konfigurace

:::caution Doporučeno:
Přejděte do složky `C:/ProgramData/CSWAutomatic` a zálohujte soubor `CSWAutomatic.config`.
:::
:::tip Proč?
Po úpravě nastavení může dojít ke smazání konfigurace, pokud se stane chyba.
:::


![config-backup](./img/cswautomatic-step2.png)

---

## 3️⃣ Spusťte průvodce konfigurací

Klikněte pravým tlačítkem na ikonu CSWAutomatic a zvolte **Konfigurácia**.

![spustit](./img/cswautomatic-step3.png)

---

## 4️⃣ Přidejte nový modul

Zvolte možnost **Přidat** a vyplňte:

- **Kód:** `obj`
- **Název:** `Shopsync import objednávek`
- **Umístění:** `C:/Program Files (x86)/Solitea/Money S4`
- **Knihovna:** `CSWImporter.dll`

![novy modul](./img/cswautomatic-step4.png)

---

## 5️⃣ Nastavte sledovanou složku a plán

#### a) Vyberte modul a klikněte na **Nastavenie**

#### b) Klikněte na **Změnit**

#### c) Vyplňte:

:::note Následující:
- **Monitorovaný adresář:** např. `C:/shopsync_temp/obj`
- **Maska:** `.xml`
- **Kód importu v Money:** `eshopobj`
- **Po úspěšném importu:** `Smazat`
- **Po neúspěšném importu:** `Smazat`
- **Čas monitorování:** od `06:00` do `22:00`
:::



![sledovani](./img/cswautomatic-step5.png)

---

## 6️⃣ Uložte nastavení

Zkontrolujte, že modul je aktivní a zobrazuje se v přehledu.

![ulozit](./img/cswautomatic-step6.png)

---

## 7️⃣ Dokončete průvodce

Klikněte na **Další** a poté **Dokončit**.

---

> ✅ Nyní je služba nastavena k automatickému zpracování objednávek.