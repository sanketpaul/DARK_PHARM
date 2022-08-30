console.log('hi')
let darkmode=()=>{
    dark=document.getElementById('dark_enable')
    body=document.body;
    body.classList.toggle('dark_node');
    dark.classList.toggle('fa-sun')
    document.getElementById('logo').classList.toggle('logo_filter')
    // document.getElementById('badge1').classList.toggle('logo_filter')
    // document.querySelectorAll('.badge_widht').classList.toggle('logo_filter')
    // document.getElementsByTagName('input').classList.toggle('dark_node')
    document.getElementById('plus').classList.toggle('dark_node')
    document.querySelectorAll('.box_1').forEach((element)=>{
return element.classList.add('dark_node')
    })
}