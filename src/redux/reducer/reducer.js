const initialState = {
    catalog: [

        {
            id:1,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
        },
        {
            id:2,
            title: 'The Select Moscow ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 2300,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg'
        },
        {
            id:3,
            title: 'A-A Awesome Apparel ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 9000,
            countInStock: 2,
            rating: 5,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg'
        },
        {
            id:4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 2,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:5,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 1,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:6,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        }



    ],
    basket: [],
    favorites: []
}



export const reducer = (state = initialState, action) => {
    console.log("payload:",action.payload)
    switch(action.type){
        case "ADD_TO_BASKET":
            const findProduct = state.basket.find(el => el.id === action.payload.id)

            if(findProduct){
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el
                    )
                }
            }
            return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}



            return {...state, basket: [...state.basket, action.payload]}
        case "DECREASE_QUANTITY":
            if(state.basket[action.payload].quantity > 1){
                return {
                    ...state, basket: state.basket.map((el,idx) => idx === action.payload ?
                        {...el, quantity: el.quantity - 1} : el
                    )
                }
            }
        default :
            return  state
    }
}