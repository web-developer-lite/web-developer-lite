var style = document.createElement( 'style' );
style.setAttribute( 'type', 'text/css' );
style.innerHTML = [
    'address, blockquote, h1, h2, h3, h4, h5, h6, p, pre { outline: 1px solid #b94a48 !important; }',
    'dd, dl, dt, ol, ul { outline: 1px solid #468847 !important; }',
    'div, form, table { outline: 1px solid #3a87ad !important; }',
    ''
].join( '' );

document.getElementsByTagName( 'head' )[ 0 ].appendChild( style );
