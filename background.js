// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Called when the user clicks on the browser action.
//document.getElementById("rightCol").style.cssText = "display:none !important"; 
//document.getElementById("contentArea").style.cssText = "width:100% !important";
$('#rightCol')
    .css('display', 'none');
$('#contentArea')
    .css('width:', '100%');
// $('head').append('<link href='https://fonts.googleapis.com/css?family=Belleza' rel='stylesheet' type='text/css'>');

 $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'https://fonts.googleapis.com/css?family=Belleza'));
