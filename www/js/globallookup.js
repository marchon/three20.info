$(document).ready(function() {
  var class_to_url = {
    'TTLauncherView'          : '/api/TTLauncherView',
    'TTLauncherViewDelegate'  : '/api/TTLauncherView#TTLauncherViewDelegate',
    'TTMessageController'     : '/api/TTMessageController',
    'TTModel'                 : '/api/TTModel',
    'TTModelViewController'   : '/api/TTModelViewController',
    'TTNavigator'             : '/api/TTNavigator',
    'TTNavigatorDelegate'     : '/api/TTNavigator#TTNavigatorDelegate',
    'TTShape'                 : '/api/TTShape',
    'TTStyle'                 : '/api/TTStyle',
    'TTStyleContext'          : '/api/TTStyle#TTStyleContext',
    'TTContentStyle'          : '/api/TTStyle#TTContentStyle',
    'TTPartStyle'             : '/api/TTStyle#TTPartStyle',
    'TTShapeStyle'            : '/api/TTStyle#TTShapeStyle',
    'TTInsetStyle'            : '/api/TTStyle#TTInsetStyle',
    'TTBoxStyle'              : '/api/TTStyle#TTBoxStyle',
    'TTTextStyle'             : '/api/TTStyle#TTTextStyle',
    'TTImageStyle'            : '/api/TTStyle#TTImageStyle',
    'TTMaskStyle'             : '/api/TTStyle#TTMaskStyle',
    'TTBlendStyle'            : '/api/TTStyle#TTBlendStyle',
    'TTSolidFillStyle'        : '/api/TTStyle#TTSolidFillStyle',
    'TTLinearGradientFillStyle' : '/api/TTStyle#TTLinearGradientFillStyle',
    'TTReflectiveFillStyle'   : '/api/TTStyle#TTReflectiveFillStyle',
    'TTShadowStyle'           : '/api/TTStyle#TTShadowStyle',
    'TTInnerShadowStyle'      : '/api/TTStyle#TTInnerShadowStyle',
    'TTSolidBorderStyle'      : '/api/TTStyle#TTSolidBorderStyle',
    'TTHighlightBorderStyle'  : '/api/TTStyle#TTHighlightBorderStyle',
    'TTFourBorderStyle'       : '/api/TTStyle#TTFourBorderStyle',
    'TTBevelBorderStyle'      : '/api/TTStyle#TTBevelBorderStyle',
    'TTLinearGradientBorderStyle' : '/api/TTStyle#TTLinearGradientBorderStyle',
    'TTStyleDelegate'         : '/api/TTStyle#TTStyleDelegate',
    'TTStyleSheet'            : '/api/TTStyleSheet',
    'TTURLMap'                : '/api/TTURLMap',
    'TTURLRequestModel'       : '/api/TTURLRequestModel',
    'TTView'                  : '/api/TTView',
    'TTViewController'        : '/api/TTViewController',
    'TTWebController'         : '/api/TTWebController'
  };
  var class_names = [];
  for( var key in class_to_url ) {
    class_names.push(key);
  }
  $("#globallookup")
    .placeholder()
    .autocomplete(class_names, {
      autoFill: false,
      mustMatch: false,
      matchContains: true,
      width: '250px'
    })
    .result(function(event, data, formatted) {
      window.location = class_to_url[formatted];
    });
});
