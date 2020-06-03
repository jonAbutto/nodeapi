var sql = require("mssql");

//all products query
// const productsquery = 'SELECT * FROM [MUKURWE-INI LIVE\$Orders Header]';

// exports.productsquery = 
// "SELECT  item.[No_] as itemCode,item.[Description] as description  ,item.[Base Unit of Measure] as  defUnitOfMeasure  ,item.[Unit Price] as defUnitPrice ,price.[Unit of Measure] as actualUnitOfMeasure, price.[Unit Price] as actualPrice   ,price.[Customer No_] as customerNo   FROM [MUKURWE-INI LIVE\$Item] item   JOIN   [MUKURWE-INI LIVE\$Customer Unit Price Sync_] price   ON item.[No_] = price.[Item Code]  WHERE No_ LIKE  'DFP%'  AND price.[Unit Price] != '0'  AND price.[Customer No_] = '004' AND price.[Unit of Measure] NOT LIKE 'PCS'";

// var productsquery ="SELECT  item.[No_] as itemCode,item.[Description] as description  ,item.[Base Unit of Measure] as  defUnitOfMeasure  ,item.[Unit Price] as defUnitPrice ,price.[Unit of Measure] as actualUnitOfMeasure, price.[Unit Price] as actualPrice   ,price.[Customer No_] as customerNo   FROM [MUKURWE-INI LIVE\$Item] item   JOIN   [MUKURWE-INI LIVE\$Customer Unit Price Sync_] price   ON item.[No_] = price.[Item Code]  WHERE No_ LIKE  'DFP%'  AND price.[Unit Price] != '0'  AND price.[Customer No_] = '004' AND price.[Unit of Measure] NOT LIKE 'PCS'";


//exports

const request =new sql.Request();
 exports.productsquery=function(userId){
     request.input(userId, sql.VarChar, '');
    return     "SELECT  item.[No_] as itemCode,item.[Description] as description  ,item.[Base Unit of Measure] as  defUnitOfMeasure  ,item.[Unit Price] as defUnitPrice ,price.[Unit of Measure] as actualUnitOfMeasure, price.[Unit Price] as actualPrice   ,price.[Customer No_] as customerNo   FROM [MUKURWE-INI LIVE\$Item] item   JOIN   [MUKURWE-INI LIVE\$Customer Unit Price Sync_] price   ON item.[No_] = price.[Item Code]  WHERE No_ LIKE  'DFP%'  AND price.[Unit Price] != '0'  AND price.[Customer No_] = '004' AND price.[Unit of Measure] NOT LIKE 'PCS'";
}