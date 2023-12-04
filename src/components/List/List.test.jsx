import { render,screen, within } from "@testing-library/react"
import { users } from "../../constants/constants"
import { expect } from "vitest"
import List from "."

it("Gönderilen dizideki her kullanici için ekrana tablo satiri basilir",()=>{

    render (<List users={ users}/>)

    const body = screen.getByTestId("table-body")
    const rows = within(body).getAllByRole("row")

    expect(rows).toHaveLength(users.length)
})

it("Her bir hücre için isim email yaş değerleri hücre içinde ekrana basilir",()=>{

    render (<List users={users}/>)

    for (const user of users) {
        screen.getByRole("cell", {name:user.name})
        screen.getByRole("cell", {name:user.email})
        screen.getByRole("cell", {name:user.age})
    }
})

