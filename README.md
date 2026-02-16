# Labb 3 - Vera Kippel

Detta är min labb 3.  
För att komma åt produktsidor där produkterna kan ändras och raderas så krävs giltig JWT-token från localStorage.  

API:et som används har CRUD-operationer samt så finns det en route som kollar giltighet på token.   
React router har använts för routing i applikationen.
  
I denna labb så har React använts med olika komponenter, pages, context och types.  

Components innehåller:
- Header (både en tsx-fil och egen css-fil till den): visar alla sidors header, om en användare är inloggad så visas logga ut iställlet för logga in, headern ändras också till ett meddelande för den inloggade
- Layout.tsx: visar hur appliaktionens sidor ska vara uppbyggda
- Products.css: css-fil för produkter
- ProtectedRoute.tsx: fil som används för att navigera användaren till logga in sidan om hen inte är behörig
  
Pages innehåller:
- AddPage: Sida för att lägga till en produkt (skyddad sida)
- EditPage: Sida för att redigera en existerande produkt (skyddad sida)
- LoginPage: Logga in en användare (publik sida)
- ProductsPage: Visar alla inlagda produkter med möjlighet att lägga till, redigera eller radera en produkt (skyddad sida)
- StartPage: Startsida som visar alla produkter (publik sida)
  
Types innehåller:  Alla interfaces som kan användas i applikationen.  

Context innehåller data för att kunna användas i olika komponenter:
- Funktion för att logga in
- Funktion för att logga ut
- Autentisera token
