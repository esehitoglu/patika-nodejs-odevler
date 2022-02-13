const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    const url = ctx.url;
    if (url == '/'){
        ctx.body = 'index sayfasına hoşgeldiniz';
    }
    else if( url == '/hakkimda' ){
        ctx.body = 'Hakkimda sayfasına hoşgeldiniz';
    }
    else if( url == '/iletisim' ){
        ctx.body = 'iletişim sayfasına hoşgeldiniz';
    }
    else{
        ctx.body = '404';
    }

});

app.listen(3000);