"use client"

import UseCourses from "@/hooks/UseCourses"

const page = ({params}) => {
    const { courses} = UseCourses()
  return (
    <div>details page of course {params.id}</div>
  )
}

export default page