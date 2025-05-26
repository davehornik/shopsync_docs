---
title: poznámky k formátování etc.
description: poznámky k pár věcem
---
# 🧠 Admonitions (barevné bloky)

:::tip Tip <code>:::tip</code>
Pokud máte více e-shopů propojených s jedním ERP, doporučujeme vytvořit samostatný konfigurační profil pro každý z nich.
:::

:::danger Varování <code>:::danger</code>
Tato operace vymaže všechny nespárované objednávky z databáze. Před pokračováním se ujistěte, že máte zálohu!
:::

:::caution Upozornění <code>:::caution</code>
Ujistěte se, že server má správně nastavené časové pásmo, jinak mohou být časy objednávek posunuté.
:::

:::info Informace <code>:::info</code>
Nová verze ShopSync 3.2.1 přináší podporu pro dvoufázovou autentifikaci a přímý export faktur.
:::

:::note Poznámka <code>:::note</code>
Všechny cesty v konfiguračních souborech musí být absolutní. Relativní cesty nejsou podporovány na serverových instalacích.
:::

---

# 🗂️ Tabs – Přepínatelné záložky

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="🪟 Windows">
    1. Stáhněte <code>test.exe</code><br />
    2. Pravým tlačítkem klikněte na soubor → „Spustit jako správce“<br />
    3. Dokončete instalaci dle pokynů průvodce
  </TabItem>
  <TabItem value="linux" label="🐧 Linux">
    1. Otevřete terminál a zadejte:<br />
    <code>sudo chmod +x install.sh</code><br />
    2. Spusťte instalaci pomocí:<br />
    <code>sudo ./install.sh</code>
  </TabItem>
</Tabs>

---

# 🗂️ Tabs – Automatické skupinové záložky

Krok 1.
<Tabs groupId="operating-systems">
  <TabItem value="Shoptet" label="Shoptet">Use Ctrl + C to copy.</TabItem>
  <TabItem value="Presta" label="Presta">Use Command + C to copy.</TabItem>
</Tabs>
Krok 2.
<Tabs groupId="operating-systems">
  <TabItem value="Shoptet" label="Shoptet">Use Ctrl + V to paste.</TabItem>
  <TabItem value="Presta" label="Presta">Use Command + V to paste.</TabItem>
  </Tabs>
Krok 3.
<Tabs groupId="operating-systems">
  <TabItem value="Shoptet" label="Shoptet">Use Ctrl + V to paste.</TabItem>
  <TabItem value="Presta" label="Presta">Use Command + V to paste.</TabItem>
</Tabs>

---
# 📂 Collapsible bloky (rozbalovací sekce)

<details>
<summary>📁 Krok 3 – Rozšířené nastavení</summary>

Text k hlavnímu kroku...

<details>
<summary>🔧 3. A – Nastavení barev</summary>
Zde upravíte barvy rozhraní...
</details>

<details>
<summary>🔧 3.B – Nastavení barev</summary>
Zde upravíte barvy rozhraní...
</details>

</details>
---

# 📁 Výpis souborů / struktury

```bash
Shopsync/
├── config.php
├── index.js
├── modules/
│   ├── pohoda.php
│   └── shoptet.php
└── logs/
    └── sync.log
```

---

# 🎥 Video embed

<iframe width="100%" height="400" src="https://www.youtube.com/embed/xxxxxxxxxxx" frameborder="0" allowfullscreen></iframe>
