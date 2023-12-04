import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import App from "./App";

it("Uygulama doğru çalişiyor mu?",async()=>{
    render (<App/>)

    const nameInp = screen.getByLabelText("İsim")
    const emailInp = screen.getByLabelText("Email")
    const ageInp = screen.getByLabelText("Yaş")
    const button = screen.getByRole("button", {name:"Ekle"})

    await user.type (nameInp, "ahmet")
    await user.type(emailInp, "ahmet@gmail.com")
    await user.type(ageInp, "36")

    await user.click(button)
    
    await screen.findByRole("cell", {name:"ahmet"})
    await screen.findByRole("cell", {name:"ahmet@gmail.com"})
    await screen.findByRole("cell", {name:"36"})
})
