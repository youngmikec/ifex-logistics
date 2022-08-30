import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/nav-bar";

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#058AB3] w-full h-max flex justify-center py-6">
                <div className="h-48 text-center text-white">
                    <h2 className="title">Contact Us</h2>
                    <p className="sub-title">(+234) 014 535 431, (+234) 0905 537 7822 info@ifexexpressnig.com</p>
                </div>
            </div>

            <div className="bg-[#f5f5f5] w-full h-max py-12">
                <div className="mx-auto lg:w-8/12">
                    <div className="">
                        <form>
                            <div className="grid lg:grid-cols-2 sm:grid-cols-1 mb-6">
                                <div className="lg:mr-4">
                                    <input type="text" className="px-3 py-3 rounded-lg w-full" placeholder="First Name" />
                                </div>
                                <div className="lg:ml-4">
                                    <input type="text" className="px-3 py-3 rounded-lg w-full" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="my-6">
                                <input type="email" className="px-3 py-3 rounded-lg w-full" placeholder="email" />
                            </div>
                            <div className="my-6">
                                <input type="text" className="px-3 py-3 rounded-lg w-full" placeholder="Subject" />
                            </div>
                            <div className="my-6">
                                <textarea name="message" id="message" className="px-3 py-3 rounded-lg w-full" cols="30" rows="10"></textarea>
                            </div>
                            <div className="my-6 flex justify-end">
                                <button className="bg-[#058AB3] text-white px-3 py-1 rounded-lg">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;