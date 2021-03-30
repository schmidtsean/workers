5.times do
  worker = Worker.create(
    title: Faker::DcComics.villain,
    specialty: Faker::DcComics.heroine
  )

  3.times do
    service = Service.create(
      title: Faker::DcComics.title,
      body: Faker::Lorem.paragraph,
      worker_id: worker.id
    )

    Comment.create(
      body: Faker::Lorem.paragraph,
      title: Faker::DcComics.hero,
      service_id: service.id
    )
  end
end

puts 'Data has been seeded'