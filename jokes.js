let myjokes = 
    
[
    {"id":59,"title":"Spring and summershoes","price":20,"quantity":3, "total":60,"discountPercentage":8.71,"discountedPrice":55, "thumbnail":"https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"},
    {
    "id":88,"title":"TC Reusable Silicone Magic Washing Gloves","price":29,"quantity":2,"total":58,"discountPercentage":3.19,"discountedPrice":56,"thumbnail":"https://cdn.dummyjson.com/product-images/88/thumbnail.jpg"},
    {
        "id":18,"title":"Oil Free Moisturizer 100ml","price":40,"quantity":2,"total":80,"discountPercentage":13.1,"discountedPrice":70,"thumbnail":"https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"},
        {
            "id":95,"title":"Wholesale cargo lashing Belt","price":930,"quantity":1,"total":930,"discountPercentage":17.67,"discountedPrice":766,"thumbnail":"https://cdn.dummyjson.com/product-images/95/thumbnail.jpg"},
            {
                "id":39,"title":"Women Sweaters Wool","price":600,"quantity":2,"total":1200,"discountPercentage":17.2,"discountedPrice":994,"thumbnail":"https://cdn.dummyjson.com/product-images/39/thumbnail.jpg"}],"total":2328,"discountedTotal":1941,"userId":97,"totalProducts":5,"totalQuantity":10},
                {
                    "id":2,"products":[{"id":96,"title":"lighting ceiling kitchen","price":30,"quantity":2,"total":60,"discountPercentage":14.89,"discountedPrice":51,"thumbnail":"https://cdn.dummyjson.com/product-images/96/thumbnail.jpg"},
                    {
                        "id":91,"title":"Black Motorbike","price":569,"quantity":3,"total":1707,"discountPercentage":13.63,"discountedPrice":1474,"thumbnail":"https://cdn.dummyjson.com/product-images/91/thumbnail.jpg"},
                        {
                            "id":9,"title":"Infinix INBOOK","price":1099,"quantity":1,"total":1099,"discountPercentage":11.83,"discountedPrice":969,"thumbnail":"https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"},
                            {"id":16,"title":"Hyaluronic Acid Serum","price":19,"quantity":1,"total":19,"discountPercentage":13.31,"discountedPrice":16,"thumbnail":"https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"},
                            {"id":54,"title":"Pubg Printed Graphic T-Shirt","price":46,"quantity":3,"total":138,"discountPercentage":16.44,"discountedPrice":115,"thumbnail":"https://cdn.dummyjson.com/product-images/54/thumbnail.jpg"}],"total":3023,"discountedTotal":2625,"userId":30,"totalProducts":5,"totalQuantity":10},
                            {"id":3,"products":[{"id":37,"title":"ank Tops for Womens/Girls","price":50,"quantity":2,"total":100,"discountPercentage":12.05,"discountedPrice":88,"thumbnail":"https://cdn.dummyjson.com/product-images/37/thumbnail.jpg"},
                            {"id":80,"title":"Chain Pin Tassel Earrings","price":45,"quantity":3,"total":135,"discountPercentage":17.75,"discountedPrice":111,"thumbnail":"https://cdn.dummyjson.com/product-images/80/thumbnail.jpg"}
                        ]


let index = Math.floor(Math.random() * myjokes.length - 1)
// console.log(myjokes);
console.log(index);
var data = document.getElementById("jokes")
console.log(data)
data.innerHTML = myjokes[index]