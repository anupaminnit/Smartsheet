// Initialize the client
var client = require('smartsheet');
var smartsheet = client.createClient({
  accessToken: 'JC2r0LPPehgj8GNVondUXy1e1wuHQw8pXPa7Y',
  logLevel: 'info'
});

// The `smartsheet` variable now contains access to all of the APIs

// Set queryParameters for `include` and pagination
var options = {
  queryParameters: {
    include: "attachments",
    includeAll: true
  }
};

// List all sheets
// smartsheet.sheets.listSheets(options)
//   .then(function (result) {
//     var sheetId = result.data[4].id;                // Choose the fifth sheet(new sheet)

//     // Load one sheet
//     smartsheet.sheets.getSheet({id: sheetId})
//       .then(function(sheetInfo) {
//         console.log(sheetInfo);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

  
  
  // Set options
//   var options = {
//     sheetId: 5314397825460100,
//     body: row
//     };
  


  // Add rows to sheet
//   smartsheet.sheets.addRows(options)
//     .then(function(newRows) {
//       console.log(newRows);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });


//GET SHEET STARTS HERE
  
// var options = {
//     id: 5314397825460100// Id of Sheet
//   };
  
// //   Get sheet
//   smartsheet.sheets.getSheet(options)
//       .then(function(sheetInfo) {
//           console.log(sheetInfo);
//       })
//       .catch(function(error) {
//           console.log(error);
//       }); 
      
      

//TODO: Update column
// var column = {
//     "index": 0,
//     "title": "ItemName",
//     "type": "TEXT_NUMBER" 
//   };
  
//   // Set options
//   var options = {
//     sheetId: 5314397825460100,
//     columnId: 3466629573044100,
//     body: column
//     };
  
//   // Update column
//   smartsheet.sheets.updateColumn(options)
//     .then(function(updatedColumn) {
//       console.log(updatedColumn);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });



// DELETE ROW
// Set options
// var options = {
//     sheetId: 5314397825460100,
//     rowId: 4206022424717188
//   };
  
//   // Delete row
//   smartsheet.sheets.deleteRow(options)
//     .then(function(results) {
//       console.log(results);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });




// Update Rows
// Specify updated cell values
var row = [
    {
      "id": "7701957763065732",
      "cells": [
        {
          "columnId": 5718429386729348,
          "value": "4"
        },
        {
          "columnId": 3466629573044100,
          "value": "Mobiles"
        }
      ]
    }
  ];
  
  // Set options
  var options = {
    sheetId: 5314397825460100,
    body: row
    };
  
  // Update rows in sheet
  smartsheet.sheets.updateRow(options)
    .then(function(updatedRows) {
      console.log(updatedRows);
    })
    .catch(function(error) {
      console.log(error);
    });


    // Updating full row 
  //   optionupdate= {
  //     sheetId: sheetno,
  //     body :  [{"id": "rowid", "parentId": "sectrow", "toBottom": "true"}])
  //  };
