"use client"
import { useRef, useState } from "react"
import "./freeestimateform.css"
import MessageStatus from "../MessageStatus/MessageStatus"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{
        sendEmail(evt, setStatus, {
            receiverEmail: process.env.NEXT_PUBLIC_EMAIL_ADDRESS!,
            data: Object.fromEntries(new FormData(formRef.current))
        }, formRef.current)
    }}>

        {/* START FIELDS */}

            <div className="input-wrapper">
                <input required type="text" name="Name" id="nameInput" placeholder={"Name"} />
            </div>
            
            <div className="input-wrapper">
                <input required type="text" name="Phone_Number" id="phoneNumberInput" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
                <input required type="email" name="Email" id="emailInput" placeholder={"Email Address"} />
            </div>
            <div className="input-wrapper">
                <input className="half-input" type="text" name="Dates" id="dateInput" placeholder={"Dates (Optional)"} />

                <input className="half-input" type="text" name="Guest_Amt" id="amtInput" placeholder={"Approx Guests (Optional)"} />
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={9999} name="Event_Details" id="messageInput" placeholder={"Tell Us About Your Event"}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-link main-link-outline" id="estimateFormSubmit" type="submit">Submit <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"/></g></svg></a>
            </div>

        </form>
    </>
  )
}
