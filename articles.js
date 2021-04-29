var faker = require('faker')

function generateArticles () {
  var articles = []

  for (var id = 0; id < 20; id++) {
    var firstName = faker.name.firstName()
    // var lastName = faker.name.firstName()
    // var phoneNumber = faker.phone.phoneNumberFormat()
    var date = faker.date.past()
    var title = faker.lorem.sentence()
    var avatar = faker.image.avatar()
    var likes = faker.datatype.number(700)

    articles.push({
      "id": id,
      "username": firstName,
      // "first_name": firstName,
      // "last_name": lastName,
      "date": date,
      "title": title,
      "avatar": avatar,
      "likes": likes,
    })
  }

  return { "articles": articles }
}

// 如果你要用json-server的话，就需要export这个生成fake data的function
module.exports = generateArticles