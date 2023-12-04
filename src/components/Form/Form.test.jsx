import { render, screen } from "@testing-library/react"
import Form from "."
import user from "@testing-library/user-event"

it("Form gönderilince addUser doğru parametreleri alıp çalışıyor mu", async ()=>{
    const mock = vi.fn()
    user.setup()
    render (<Form addUser={mock}/>)

    const nameInp = screen.getByLabelText("İsim")
    const emailInp = screen.getByLabelText("Email")
    const ageInp = screen.getByLabelText("Yaş")
    const button = screen.getByRole("button")

    await user.click(nameInp)
    await user.keyboard("ahmet")

    await user.type(emailInp, "ahmet@gmail.com")
    await user.type(ageInp, "36")
    await user.click(button)

    expect(mock).toBeCalled()
    expect(mock).toBeCalledWith({
        name:"ahmet",
        email:"ahmet@gmail.com",
        age:"36"
    })
})