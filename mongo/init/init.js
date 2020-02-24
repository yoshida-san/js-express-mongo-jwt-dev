db.todos.insert({
  todo_id: 1,
  title: 'Sample to-do 1',
  limit: '2020/02/22',
  status: 1,
})

db.todos.insert({
  todo_id: 2,
  title: 'Sample to-do 2',
  limit: '2020/02/22',
  status: 3,
})

db.statuses.insert({
  status_id: 1,
  name: 'Waiting',
})

db.statuses.insert({
  status_id: 2,
  name: 'Working',
})

db.statuses.insert({
  status_id: 3,
  name: 'Discontinued',
})

db.statuses.insert({
  status_id: 4,
  name: 'Pending',
})

db.statuses.insert({
  status_id: 5,
  name: 'Done',
})
