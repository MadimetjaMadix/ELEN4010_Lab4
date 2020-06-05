const list = require('../classList')

describe('Number of Items in List Function', () => {
  test('retuns the size of list', () => {
    const numberOfItems = list.numberOfItems() + 2
    list.add('Mad')
    list.add('Madi')
    expect(list.numberOfItems()).toEqual(numberOfItems)
  })
})

describe('Everything in a List Function', () => {
  test('Returns the list', () => {
    const Mylist = list.everything()
    expect(list.get(0)).toEqual(Mylist[0])
  })
})

describe('Add to list Function', () => {
  test('it should add the given student', () => {
    // After adding the length should be increased by one
    const numberOfItems = list.numberOfItems() + 1

    list.add('Madix')
    expect(list.numberOfItems()).toEqual(numberOfItems)
  })

  test('Throws an error when the name string is empty', () => {
    try {
      list.add('')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Student name cannot be empty')
    }
  })
})

describe('Get from the list Function', () => {
  test('it should return the student at a given Index', () => {
    list.add('Madix')
    list.add('Diggs')
    list.add('Hertz')
    list.add('Tes')
    list.add('Tickes')
    const IndexOfLastStudent = list.numberOfItems() - 1

    expect(list.get(IndexOfLastStudent)).toEqual('Tickes')
  })

  test('Throws an error if the index is out of bounds', () => {
    list.add('Madix')
    list.add('Diggs')

    const IndexOfStudent = list.numberOfItems() + 10
    function passWrongIndex () {
      list.get(IndexOfStudent)
    }
    expect(passWrongIndex).toThrowError(new Error('Index out of range'))
  })
})

describe('Edit the list Function', () => {
  list.add('Mad')
  test('Throws an error when the name string is empty', () => {
    try {
      list.edit('', 0)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Student name cannot be empty')
    }
  })

  test('Throws an error if the index is out of bounds', () => {
    list.add('Madix')
    list.add('Diggs')

    const IndexOfStudent = list.numberOfItems() + 1

    try {
      list.edit('Jhene', IndexOfStudent)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Index out of range')
    }
  })

  test('Edits the details of the student at a given Index', () => {
    list.add('Madix')
    list.add('Diggs')
    const newName = 'Jhene'
    list.edit(newName, 0)
    expect(list.get(0)).toEqual(newName)
  })
})

describe('Delete at list index Function', () => {
  test('Throws an error if the index is out of bounds', () => {
    list.add('Madix')
    const IndexOfStudent = list.numberOfItems() + 1

    try {
      list.delete(IndexOfStudent)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Index out of range')
    }
  })
  test('Deletes the student at a give index', () => {
    list.add('Mad')
    list.add('Madi')

    const numberOfItems = list.numberOfItems()
    list.delete(0)
    expect(list.numberOfItems()).toEqual((numberOfItems - 1))
  })
})
