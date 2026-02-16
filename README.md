# Labb 3 - Vera Kippel

Detta är min labb 3.  
För att komma åt produktsidor där produkterna kan ändras och raderas så krävs giltig JWT-token.  

API:et som används har CRUD-operationer samt så finns det en route som kollar giltighet på token.  
  
I denna labb så har React använts med olika komponenter, pages, context och types.  

Components innehåller:
- Header (både en tsx-fil och egen css-fil till den)
- Layout.tsx (visar hur appliaktionens sidor ska vara uppbyggda)
- Products.css (css-fil för produkter)
- ProtectedRoute.tsx (fil som används för att nivigera användaren till logga in sidan om hen inte är behörig)
  
Pages innehåller:
- AddPage: Sida för att lägga till en produkt
- EditPage: Sida för att redigera en existerande produkt
- LoginPage: Logga in en användare
- ProductsPage: Visar alla inlagda produkter
- StartPage: Startsida
  
Types innehåller:  Alla interfaces som kan användas i applikationen.  

Context innehåller data för att kunna användas i olika komponenter:
- Funktion för att logga in
- Funktion för att logga ut
- Autentisera token
