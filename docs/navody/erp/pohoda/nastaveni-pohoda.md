---
id: pohoda-nastaveni
title: Nastavení Pohody
sidebar_position: 1
---

# Nastavení Pohoda

Tento návod vám pomůže s konfigurací aplikace ShopSync pro propojení s účetním systémem **Pohoda**.

---

## Karta „Připojení k IS“

1. Vyplňte **IČ** – bez toho nelze importovat do Pohody, správně se nenastaví měna ani sazby DPH.
2. Vyberte typ Pohody: **Pohoda / SQL / E1**
3. Vyplňte cestu k `pohoda.exe`
4. Vyplňte cestu k databázi – buď soubor `.mdb`, nebo připojovací řetězec (pro SQL verze)

### Pokud přihlašování probíhá pomocí Windows uživatele:

```js
Driver={SQL Server Native Client 11.0};Server=SERVER\POHODA;Database=StwPh_98765432_2013;
Trusted_Connection=yes;MARS_Connection=yes
```

### Pokud přihlašování probíhá přes uživatelské jméno a heslo:

```js
Driver={SQL Server Native Client 11.0};Server=SERVER\POHODA;Database=StwPh_98765432_2013;
MARS_Connection=yes;Uid=uzivatel;Pwd=heslo
```

:::caution Ujistěte se, že máte nainstalovaný správný ODBC ovladač (např. SQL Server Native Client 11.0)

:::
---

## Další nastavení

- Vyplňte cestu pro **dočasné soubory**, **přílohy** a **obrázky**
- Uložte nastavení kliknutím na **Uložit a aktualizovat nastavení**

---

## Způsoby platby

Po načtení údajů z e-shopu klikněte na **Inicializovat nastavení**. Poté spárujte platební metody s odpovídajícími hodnotami v Pohodě. Porovnává se textová hodnota.

---

## Způsoby dopravy

Stejně jako u plateb – nejdříve klikněte na **Inicializovat nastavení**, poté spárujte dopravce s hodnotami v Pohodě.

---

## Zaokrouhlení

Doporučené hodnoty:

- `zaokrouhleni_cizi`: `none`
- `zaokrouhleni_domaci`: `math2one` (CZ) / `none` (SK)
- `zaokrouhleni_polozek`: `4`

---

## OSS (One Stop Shop)

- `oss_hlavni_zeme`: Zadejte zemi, kde má firma sídlo
- `oss`: Zapnout/vypnout podle potřeby (převod OSS objednávek)

---

Máte-li otázky nebo potřebujete pomoc, neváhejte nás kontaktovat na: **podpora@shopsync.cz**