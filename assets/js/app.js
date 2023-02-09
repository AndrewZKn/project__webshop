
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                        // FORM REGISTER//


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    const registerbutton = document.querySelector('.header__navbar-list:last-child .header__navbar-item:nth-child(3)')

    const backformRegister= document.querySelector('.auth-form:first-child .auth-form__controls-back')

    const btnSwitchRegister= document.querySelector('.auth-form:first-child .auth-form__switch-btn')
            
    // const btnRegister= document.querySelector('.auth-form:first-child .btn.btn--primary')

    const overplay = document.querySelector('.modal__overlay')
    const modal = document.querySelector('.modal')
    const registerForm = document.querySelector('.auth-form:first-child')

    registerbutton.addEventListener('click', ()=>{
        overplay.classList.add('showblock')
        modal.classList.add('showflex')
        registerForm.classList.add('showblock')
        signinForm.classList.add('hidden')
    // form
        overplay.classList.remove('hidden')
        modal.classList.remove('hidden')
        registerForm.classList.remove('hidden')
    })
    backformRegister.addEventListener('click', ()=>{
        overplay.classList.add('hidden')
        modal.classList.add('hidden')
        registerForm.classList.add('hidden')
    })
    btnSwitchRegister.addEventListener('click', ()=>{
        signinForm.classList.remove('hidden')
        signinForm.classList.add('showblock')
        registerForm.classList.add('hidden')
        signinForm.classList.remove('showblock')
    })

    
    const formRegister = registerForm.querySelectorAll('.auth-form__group')
    formRegister.forEach((form)=>{
        const field = form.querySelector('.auth-form__input')
       
        // check email field
        const emailField = document.querySelector('.auth-form__group:nth-child(1) .auth-form__input')
        const spanEmail = document.querySelector('.auth-form__group:nth-child(1) .auth-form__span')
        function checkEmail(){
            emailField.addEventListener('blur', ()=>{

                const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if(!emailField.value.trim().match(regex)){
                    spanEmail.innerText = 'Vui lòng nhập đúng định dạng email@gmail.com'
                    spanEmail.style.color='red'
                }
                else if(field.value.trim() === ''){
                    field.style.border = '1px solid red'
                    spanEmail.innerText = 'Vui lòng nhập trường này'
                    spanEmail.style.color='red'
                }
                else{
                    field.style.border = '1px solid #dbdbdb'
                    spanEmail.innerText = ''
                }
            })
        }
        checkEmail()

        // check password
        const passwordField = document.querySelector('.auth-form__group:nth-child(2) .auth-form__input')
        const spanPassword = document.querySelector('.auth-form__group:nth-child(2) .auth-form__span')
        function checkPassword(){
            passwordField.addEventListener('blur',()=>{

                if(passwordField.value.trim().length <= 8){
                    spanPassword.innerText = 'Vui lòng nhập ký tự <= 8'
                    spanPassword.style.color='red'
                }
                else if(field.value === '' ){
                    field.style.border = '1px solid red'
                    spanPassword.innerText = 'Vui lòng nhập trường này'
                    spanPassword.style.color='red'
                }
                else{
                    field.style.border = '1px solid #dbdbdb'
                    spanPassword.innerText = ''
                }
            })
        }
        
        checkPassword()
        

        // check password comfirm
        const passwordComfirmField = document.querySelector('.auth-form__group:nth-child(3) .auth-form__input')
        const spanPasswordComfirm = document.querySelector('.auth-form__group:nth-child(3) .auth-form__span')
        function checkPasswordComfirm(){
            passwordComfirmField.addEventListener('blur', function(){
                if(passwordComfirmField.value.trim() !== passwordField.value.trim()){
                    spanPasswordComfirm.innerText = 'Mật khẩu không trùng khớp'
                    spanPasswordComfirm.style.color='red'
                }
                else if(field.value.trim() === '' ){
                    field.style.border = '1px solid red'
                    spanPasswordComfirm.innerText = 'Vui lòng nhập trường này'
                    spanPasswordComfirm.style.color='red'
                }
                else{
                    field.style.border = '1px solid #dbdbdb'
                    spanPasswordComfirm.innerText = ''
                }
            })
        }
        checkPasswordComfirm()
        
    })
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // FORM SIGN IN//
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    const signinbutton = document.querySelector('.header__navbar-list:last-child .header__navbar-item:nth-child(4)')

    const backformSignin = document.querySelector('.auth-form:last-child .auth-form__controls-back')

    const btnSwitchSignin = document.querySelector('.auth-form:last-child .auth-form__switch-btn')

    const btnSign= document.querySelector('.auth-form:last-child .btn.btn--primary')

    const signinForm = document.querySelector('.auth-form:last-child')
    
    signinbutton.addEventListener('click', ()=>{
        overplay.classList.add('showblock')
        modal.classList.add('showflex')
        signinForm.classList.add('showblock')
        registerForm.classList.add('hidden')
    //FORM
        overplay.classList.remove('hidden')
        modal.classList.remove('hidden')
        signinForm.classList.remove('hidden')
    })
    backformSignin.addEventListener('click', ()=>{
        overplay.classList.add('hidden')
        modal.classList.add('hidden')
        signinForm.classList.add('hidden')
    })
    btnSwitchSignin.addEventListener('click', ()=>{
        signinForm.classList.add('hidden')
        signinForm.classList.remove('showblock')
        registerForm.classList.remove('hidden')
        signinForm.classList.add('showblock')
    })
    
    const formSign = signinForm.querySelectorAll('.auth-form__group')
    // formSign.forEach((form)=>{
       
    //     // check email field
    //     const emailFieldSign = document.getElementById('auth-form__input-email')
    //     const field = form.querySelector('.auth-form__input')
    //     const spanEmail = document.querySelector('.auth-form__group:nth-child(1) .auth-form__span')
    //     console.log(field)

    //     emailFieldSign.addEventListener('blur', checkEmail)

    //     function checkEmail(){
    //         console.log('jel')
            
    //         const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    //             if(!emailFieldSign.value.trim().match(regex)){
    //                 spanEmail.innerText ='Vui lòng nhập đúng định dạng email@gmail.com'
    //                 spanEmail.style.color='red'
    //             }
    //             else if(field.value.trim() === ''){
    //                 field.style.border = '1px solid red'
    //                 spanEmail.innerText = 'Vui lòng nhập trường này'
    //                 spanEmail.style.color='red'
    //             }
    //             else{
    //                 field.style.border = '1px solid #dbdbdb'
    //                 spanEmail.innerText = ''
    //             }
    //     }
    //     // check password
    //     const passwordFieldSign = document.getElementById('auth-form__input-password')
    //     const spanPassword = document.querySelector('.auth-form__group:nth-child(2) .auth-form__span')

    //     passwordFieldSign.addEventListener('blur', checkPassword)
    //     function checkPassword(){
    //         console.log('jel')
    //         if(passwordFieldSign.value.trim().length <= 8){
    //             spanPassword.innerText = 'Vui lòng nhập ký tự <= 8'
    //             spanPassword.style.color='red'
    //         }
    //         else if(field.value === '' ){
    //             field.style.border = '1px solid red'
    //             spanPassword.innerText = 'Vui lòng nhập trường này'
    //             spanPassword.style.color='red'
    //         }
    //         else{
    //             field.style.border = '1px solid #dbdbdb'
    //             spanPassword.innerText = ''
    //         }
    //     }
    // })
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // SUBMIT //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    modal.addEventListener('submit', (e)=>{
        e.preventDefault()
    })

    const user = document.querySelector('.header__navbar-list:last-child .header__navbar-user')

    btnSign.addEventListener('click', ()=>{
        
        user.style.display = 'flex'
        overplay.classList.add('hidden')
        modal.classList.add('hidden')
        signinForm.classList.add('hidden')

    //HIDDEN BUTTON
        registerbutton.classList.add('hidden')
        signinbutton.classList.add('hidden')
        
    })
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // LOGOUT//
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const logout = user.querySelector('.header__navbar-user-menu .header__navbar-user-item:last-child')
    
    logout.addEventListener('click', (e)=>{
        user.style.display = 'none'
        overplay.classList.remove('hidden')
        modal.classList.remove('hidden')
        signinForm.classList.remove('hidden')
    //HIDDEN BUTTON
        registerbutton.classList.remove('hidden')
        signinbutton.classList.remove('hidden')
    })
    


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                             // FORM DATA//
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // TO-DO LIST //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const ul = document.querySelector('.header__search-history-list')
    const input = document.querySelector('.header__search-input')
    const form = document.querySelector('.header__search-form')
    
    form.addEventListener('submit', function(e){
        e.preventDefault()
        let value = input.value.trim()
        if(value){
            addTodo({
                text: value,
            })
            saveTodo()
        }
        input.value = ''
    })
    // add todo
    function addTodo(todo){
        const li = document.createElement('li')
        li.setAttribute('class', 'header__search-history-item')
        li.innerHTML =  `
            <a href="#" class="header__search-history-link">${todo.text}</a>
            <i class="header__search-history-icon fa-solid fa-trash-can"></i>
        `
        let button = document.querySelectorAll('.header__search-history-icon')
        // delete item
        button.forEach((item)=>{
            item.addEventListener('click',(e)=>{
                const child = e.target.parentElement
                child.remove()
                saveTodo()
            })
        })
        li.addEventListener('onmouseover',()=>{
            const history = document.querySelector('.header__search-history')
            history.style.display ='block'
        })

        ul.appendChild(li)
    }
    // save todo
    function saveTodo(){
        let todoList = document.querySelectorAll('.header__search-history-item')
        let todoStorage = []
        todoList.forEach(function(item){
            let text = item.querySelector('a').innerText
            let status = item.querySelector('i')
            todoStorage.push({
                text,
                status
            })
        })
        // key :value
        localStorage.setItem('todoList', JSON.stringify(todoStorage))
    }
    // init save variable
    function init(){
        let data = JSON.parse(localStorage.getItem('todoList'))
        data.forEach((item)=>{
            addTodo(item)
        })
    }
    init()
   



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // FILTER PRODUCT //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const dataProduct = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695.99,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3,
            "count": 400
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 1.9,
            "count": 100
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
            "rate": 3.3,
            "count": 203
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 470
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 250
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.2,
            "count": 140
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
            "rate": 2.6,
            "count": 235
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 340
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.8,
            "count": 679
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 130
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.5,
            "count": 146
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"
    }
    , 
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        },
        "sold":'99',
        "brand":'GuGi',
        "color":"yellow",
        "price-old":"1.200.000 đ",
        "country":"Japan",
        "sale-off-percent":"43%",
        "sale-off-label":"Giảm"


    }]

    const container = document.querySelector('.home-product .row')
    const filter = document.getElementById('header_search-input-find')
    
    const listItems = []


    function getProduct(){
        dataProduct.forEach((data)=>{
            const div = document.createElement('div')
            div.setAttribute('class', 'col l-2-4 m-4 c-6 home-product-box')
            listItems.push(div)
            // style="background-image: url('./assets/imgs/google_play.png')"
            div.innerHTML = `
                    
                <a class="home-product-item" href="#">
                    <div class="home-product-item__img"><img class="home-product-img__img" id="image" src=${data.image}></img></div>
                    <h4 class="home-product-item__name"><span class="home-product-item__name-name" id="title">${data.title}</span></h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${data["price-old"]}</span>
                        <span class="home-product-item__price-current" id="price">${data.price}</span>
                    </div>
                    <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__like--liked">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div class="home-product-item__rating">
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="home-product-item__sold">${data.sold} đã bán</span>
                    </div>
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand" id="brand">${data.brand}</span>
                        <span class="home-product-item__origin-name">${data.country}</span>
                        <span class="home-product-item__origin-color" id="color">${data.color}</span>
                    </div>
                    <div class="home-product-item__favourite">
                        <i class="fas fa-check"></i>
                        <span>yêu thích</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${data["sale-off-percent"]}</span>
                        <span class="home-product-item__sale-off-label">${data["sale-off-label"]}</span>
                    </div>
                </a>
            `
            container.appendChild(div)
        })
    // container.innerHTML = html.join('')
    }
    getProduct()
    const containerItem = document.querySelectorAll('.col.l-2-4.m-4.c-6')
    function filterData() {
        let value = filter.value
        containerItem.forEach((item)=>{
            let priceItem = item.querySelector('.home-product-item__price').lastElementChild.textContent;
            let nameItem = item.querySelector('.home-product-item__name').textContent.toLocaleLowerCase();
            if(priceItem.indexOf(value) !== -1 || nameItem.indexOf(value) !== -1 ) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    }
    // on input
    const navHistory = document.getElementById('header__search-history')

    filter.addEventListener('click', ()=>{
        navHistory.style.opacity = '1'
        navHistory.style.display = 'block'
    })
    // filter.addEventListener('blur', ()=>{
    //     navHistory.style.display = 'none'
    // })
    // filter.addEventListener('keyup', filterData)

    filter.addEventListener('keypress', function(e){

        
        if(e.key === 'Enter'){
            navHistory.style.opacity = '0'
            filterData()
        }
        else{
            navHistory.style.opacity = '1'
        }
    })
    // press to search
    const btnSearch = document.getElementById('header__search-btn-btn')

    btnSearch.addEventListener('click', filterData)
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // CLICK BUTTON FILTER //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // CLICK HEART//
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const heartFill = document.querySelectorAll('.home-product-item__like-icon-fill.fas.fa-heart')
    heartFill.forEach((heart)=>{
        heart.addEventListener('click', ()=>{

            heart.classList.toggle('home-product-item__like-icon-fill')
            // const heartEmpty = document.querySelectorAll('.home-product-item__like-icon-empty.far.fa-heart')
        })
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // CLICK SHOW CART//
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const showProduct = document.getElementById('showProduct')
    const showCart = document.getElementById('showCart')
    const cart = document.querySelector(".header__card-wrap")
    const seeCart = document.getElementById('header__cart-view-cart')
    // const list = document.querySelector('.header__cart-list')
    cart.addEventListener('click', function(){
        showProduct.style.display = 'none'
        showCart.style.display = 'flex'
    })
    seeCart.addEventListener('click', function(){
        showProduct.style.display = 'none'
        // list.style.display = 'none'
        showCart.style.display = 'flex'
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // CLICK SHOW CART//
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const products = document.querySelectorAll('.home-product-box')
    const modalCart = document.querySelector('.modal__showcart')
    const closeX = document.querySelector('.cart__box-close')
    const img = document.querySelector('.home-product-img__img')
    const boxImg = document.querySelector('.cart__box-image img')
    const heading = document.querySelector('.cart__information-heading')
    const descr = document.querySelector('.cart__information-description')
    const price = document.querySelector('.cart__information-price')
    const buttonCart = document.getElementById('cart__information-button-link')
    const modalStatus = document.querySelector('.status__modal-product')
    const brand = document.querySelector('.home-product-item__origin')
    products.forEach((product, index)=>{
        product.addEventListener('click', function(){
            modalCart.style.display = 'block'
            let currentIndex = index
            boxImg.src = products[currentIndex].querySelector('.home-product-img__img').src
            heading.textContent = products[currentIndex].querySelector('.home-product-item__name-name').textContent
            price.textContent = products[currentIndex].querySelector('.home-product-item__price-current').textContent
            brand.textContent = products[currentIndex].querySelector('.home-product-item__origin-name').textContent
            dataProduct.forEach(data=>{
                descr.textContent = data.description

            })

        })

    })

    buttonCart.addEventListener('click', ()=>{
        modalStatus.style.display = 'flex'

        setTimeout(()=>{
            modalStatus.style.display = 'none'
        },2000)
    })

    closeX.addEventListener('click', ()=>{
        modalCart.style.display = 'none'
    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // CLICK SHOW CART//
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const buyList = document.querySelector('.cart__buy-list')
    // dataProduct.forEach((data)=>{
    //     const li = document.createElement('li')
    //     li.setAttribute('class', 'cart__buy-item')
        
    //     li.innerHTML = `
            
    //             <div class="cart__buy-box">
    //                 <div class="cart__buy-image">
    //                     <img class="cart__buy-img" id="image" src=${data.image} alt="ErrorImage" />
    //                 </div>
    //                 <div class="cart__buy-description">
    //                     <span class="cart__buy-dsc-span" id="title">name: ${data.title}</span>
    //                     <span class="cart__buy-dsc-span" id="color">color: ${data.color}</span>
    //                     <span class="cart__buy-dsc-span" id="brand">Brand: ${data.brand}</span>
    //                 </div>
    //                 <div class='cart__buy-price' id="price">${data.price}</div>
    //             </div>
    //             <div class="cart__buy-button">
    //                 <button class="cart__buy-button-btn">-</button>
    //                 <input type="text" class="cart__buy-input"/>
    //                 <button class="cart__buy-button-btn">+</button>
    //                 <button class="cart__buy-button-btn"><i class='cart__buy-button-icon far fa-heart'></i></button>
    //                 <button class="cart__buy-button-btn"><i class='cart__buy-button-icon fa-solid fa-trash-can'></i></button>
    //             </div>
           
    //     `
    //     buyList.appendChild(li)
    // })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // CRUD DATA // U NOT
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var formData = readData()
    insertData(formData)

    function readData(){
        const formData = {}
        formData["title"] = document.querySelector("#title").textContent
        formData["price"] = document.querySelector("#price").textContent
        formData["brand"] = document.querySelector("#brand").textContent
        // formData["color"] = document.querySelector("#color").textContent
        // <span class="cart__buy-dsc-span" >Color:${data.color}</span>
        formData["image"] = document.querySelector("#image").src
        return formData
    }
    // bug chưa render được img, name, price, brand
    
    // insert
    function insertData(data){
        const li = document.createElement('li')
        li.setAttribute('class', 'cart__buy-item')
        
            
            if(buttonCart){
                li.innerHTML += `
                    <div class="cart__buy-box">
                        <div class="cart__buy-image">
                            <img class="cart__buy-img" src=${data.image} alt="ErrorImage" />
                        </div>
                        <div class="cart__buy-description">
                            <span class="cart__buy-dsc-span" >Name:${data.title} </span>
                            <span class="cart__buy-dsc-span" >Brand:${data.brand}</span>
                        </div>
                        <div class='cart__buy-price'>${data.price}</div>
                    </div>
                    <div class="cart__buy-button">
                        <button class="cart__buy-button-btn">-</button>
                        <input type="text" class="cart__buy-input"/>
                        <button class="cart__buy-button-btn">+</button>
                        <button class="cart__buy-button-btn"><i class='cart__buy-button-icon far fa-heart'></i></button>
                        <button class="cart__buy-button-btn" onclick ="deleteData(this)"><i class='cart__buy-button-icon fa-solid fa-trash-can' ></i></button>
                    </div>
                `
            }
            else{
                li.innerHTML =''
            }

        buyList.appendChild(li)
    }
    buttonCart.addEventListener('click',insertData)
    buttonCart.addEventListener('click',saveData)
    // delete
    function deleteData(){
        document.querySelector('.cart__buy-item').remove()
        deleteDataCart()
        saveData()
    }

    // save
    // bug chưa save được xem lại
    function saveData(){
        const itemList = document.querySelectorAll('.cart__buy-item')
        const itemStorage = []
        
        itemList.forEach((item)=>{
            let title = document.querySelector("#title").textContent
            let price = document.querySelector("#price").textContent
            let brand = document.querySelector("#brand").textContent
            let image = document.querySelector("#image").src
            itemStorage.push({
                title,
                price,
                brand,
                image
            })
        })
        localStorage.setItem('itemList', JSON.stringify(itemStorage));
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            // CRUD header__cart-list // U NOT
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    insertCartList(formData)
    function insertCartList(data){
        const ul = document.querySelector('.header__cart-list-item')
        const li = document.createElement('li')
        li.setAttribute('class', 'header__cart-item')
        if(buttonCart){
            li.innerHTML +=   `
            <img src=${data.image} alt="ErrorImage" class="header__cart-img">
            <div class="header__cart-item-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">${data.title}</h5>
                    <div class="header__cart-item-price-wrap">
                        <span class="header__cart-item-price">${data.price}</span>
                        <span class="header__cart-item-multiply">x</span>
                        <span class="header__cart-item-qnt">2</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        phân loại: Bạc
                    </span>
                    <span class="header__cart-item-remove" onclick = "deleteDataCart(this)">
                        xóa
                    </span>

                </div>
            </div>

        `
        }
        else{
            li.innerHTML = ''
        }
       
        ul.appendChild(li)

    }
    function deleteDataCart(){
        document.querySelector('.header__cart-item').remove()
        deleteData()
        saveData()
    }

