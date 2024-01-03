import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
//Create user
//   const user = await prisma.user.create({
//     data: {
//       name: "Teddy Girma",
//       email: "teddy@gmail.com",
//     },
//   });


// Get all users
// Get all users with articles
// const users = await prisma.user.findMany({
//     include:{
//         articles: true
//     }
// });

// Create article and associate it with user
// const article = await prisma.article.create({
//     data:{
//         title:"My First article",
//         body: 'This is my first article',
//         author: {
//             connect: {
//                 id:1
//             }
//         }
//     }
// })

// Get all articles
// const articles = await prisma.article.findMany();

// Create user and article and associate them
// const user = await prisma.user.create({
//     data:{
//      name:"Mar Kale",
//      email:"kale@gmail.com",
//      articles: {
//         create: {
//             title:"Kale's first Article",
//             body: 'This is kales first article'
//         }
//      }

//     }
// });

// Create anthor article
// const article = await prisma.article.create({
//     data:{
//         title:"Kale's Sencond Article",
//         body: "This is kale's Sencond Article",
//         author:{
//             connect: {
//                 id:2
//             }
//         }
//     }
// })

// Get Kale's articles
// const kaleArticles = await (await prisma.article.findMany()).filter((article) => article.authorId === 2)

// Loop over users articles
// users.forEach((user) => {
//     console.log(`User: ${user.name}, ${user.email}`);
//     console.log('Articles:');
//     user.articles.forEach((article) => {
//         console.log(`_ Author: ${article.authorId}, Title:${article.title}, Body:${article.body}`)
//     })
//     console.log('\n')
// })

// Update data
// const updatedUser = await prisma.user.update({
//     where:{
//         id:1
//     },
//     data: {
//         name: 'Teda Hero'
//     }
// })

// remove article
const removeArticle = await prisma.article.delete({
    where:{
        id: 2
    }
})
  console.log(removeArticle)
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
