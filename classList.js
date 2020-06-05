// Private
const list = ['Madix', 'John']

// Public
module.exports = {
  add: function (student) {
    if (!student) throw Error('Student name cannot be empty')
    list.push(student)
  },
  edit: function (student, index) {
    if (!student) throw Error('Student name cannot be empty')
    if ((index >= list.length) || (index < 0)) throw Error('Index out of range')
    list[index] = student
  },
  get: function (index) {
    if ((index >= list.length) || (index < 0)) throw Error('Index out of range')
    return list[index]
  },
  delete: function (index) {
    list.splice(index, 1) // remove one element starting from index
  },
  numberOfItems: function () {
    return list.length
  },
  everything: function () {
    return list
  }
}
