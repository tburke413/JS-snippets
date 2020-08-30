let selectBestMovie = ({ starwars: [ first, second, third, ...rest ], data, data: {pet1: tier1pet} }) => ({ best: second, tier1pet, data })

console.log(selectBestMovie({ 
    starwars: [ 
        'A New Hope', 
        'The Empire Strikes Back', 
        'Return of the Jedi' 
    ],
    data: {
      pet1: {
        type: "dog",
        color: "white"
      },
      pet2: {
        type: "cat",
        color: "black"
      }
    }
}));
// {
//   best: 'The Empire Strikes Back',
//   tier1pet: { type: 'dog', color: 'white' },
//   data: {
//     pet1: { type: 'dog', color: 'white' },
//     pet2: { type: 'cat', color: 'black' }
//   }
// }