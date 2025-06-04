---
title: Struktura systému
description: Technický přehled fungování aplikace ShopSync
---

:::info
Tento dokument slouží jako technický přehled fungování aplikace ShopSync a může být užitečný pro správce systému, vývojáře i technickou podporu zákazníka.
:::
## 🔄 Jak probíhá synchronizace dat

1. **Plánování přenosu**  
   Po konzultaci s naším specialistou vytvoříme úlohu ve Windows Plánovači úloh, která spouští přenosy v předem definovaných časech.

2. **Směr přenosu**  
   Synchronizace může probíhat:
   - **Z e-shopu do ERP** (např. objednávky, zákazníci)
   - **Z ERP do e-shopu** (např. sklad, produkty, ceny)

3. **Prevence duplicit**  
   ShopSync má zabudovanou kontrolu duplicity. Uchovává si datum poslední úspěšné synchronizace. Toto lze resetovat pro znovunačtení dat.

## 🌐 Webhooky a API

- **ERP s veřejným API**  
  (Abra Flexi, Abra Gen) komunikují přímo přes REST API.
- **ERP bez API**  
  (Premier, Duel) exportují data na FTP.
- **E-shopy**  
  Často poskytují data přes databázové přístupy nebo API.

## 📁 Formáty dat

1. **Z e-shopu do ERP**  
   - Zdroj: SQL databáze  
   - Výstup: XML (např. Pohoda XML formát)

2. **Z ERP do e-shopu**  
   - Zdroj: ERP databáze  
   - Výstup: XML / jiný importní formát

## 📄 Logování a ladění

- Každá instalace generuje log na: `C:/shopsync/log.txt`
- Log obsahuje informace o přenosech a případných chybách
- Log lze zaslat podpoře pro diagnostiku
