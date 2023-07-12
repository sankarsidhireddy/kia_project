
let arr=["https://imgd.aeplcdn.com/664x374/n/cw/ec/144185/sonet-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
 "https://www.kia.com/content/dam/kia2/in/en/images/360vr/seltos/tiw51mc5fhh282/exterior/mpb/08-d.png",
"https://www.kia.com/content/dam/kia2/in/en/images/360vr/carnival/apb72fc5jgg047/exterior/abp/08-d.png",
"https://www.kia.com/content/dam/kia2/in/en/images/360vr/carens/tyw71mc5ftt028/exterior/mpb/08-d.png",
"https://www.kia.com/content/dam/kia2/in/en/images/360vr/ev6/asw5ycz7zkk876/exterior/swp/08-d.png"]
let hd=["KIA","KIA","KIA","KIA","KIA"]
let d=["SONET","SELTOS","CARNIVAL","CARENS","EV6"]
let i=0
let cr=document.getElementsByClassName("fa-circle")
function fun()
{
    cr[i].className="fa-regular fa-circle"
    i++
    if(i>4)
    {
        i=0
    }
    document.getElementsByClassName("car")[0].src=arr[i]
    document.querySelector(".bt h1").innerHTML=hd[i]
    document.querySelector(".bt p").innerHTML=d[i]
    cr[i].className="fa-solid fa-circle"
}
function dec()
{
    cr[i].className="fa-regular fa-circle"
    i--
    if(i<0)
    {
        i=4
    }
    document.getElementsByClassName("car")[0].src=arr[i]
    document.querySelector(".bt h1").innerHTML=hd[i]
    document.querySelector(".bt p").innerHTML=d[i]
    cr[i].className="fa-solid fa-circle"

}
function fun1(e)
{
    cr[i].className="fa-regular fa-circle"
    document.getElementsByClassName("car")[0].src=arr[e]
    i=e 
    document.querySelector(".bt h1").innerHTML=hd[i]
    document.querySelector(".bt p").innerHTML=d[i]
    cr[i].className="fa-solid fa-circle"
}
setInterval(fun,1000)
