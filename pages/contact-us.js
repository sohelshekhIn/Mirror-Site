export default function ContactUs() {
  return (
    <div className="page-layout">
      <div className="flex flex-col md:flex-row my-16 lg:my-32">
        <div className="w-full md:w-1/2 3xl:w-8/12 p-5 md:p-10 3xl:pl-32">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="100%"
                className="h-96"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Mirror%20Institue%20Nadiad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-5 md:p-10">
          <div className="flex flex-col mb-5">
            <h1 className="text-heading text-primary align-middle">
              Contact Us
            </h1>
            <span className="underline w-4/12"></span>
          </div>
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex flex-col w-full sm:w-6/12 pr-10">
              <h1 className="text-lg font-semibold pt-4">Address:</h1>
              <p className="">
                S/3,Chanakya Complex, Vaniyavad Circle, Collage Road,
                Nadiad.387001
              </p>
              <h1 className="text-lg font-semibold pt-4">Phone:</h1>
              <a href="tel:268-2529149" className="w-1/2">
                268-2529149
              </a>
              <h1 className="text-lg font-semibold pt-4">Mobile:</h1>
              <a href="tel:+919227429149" className="w-1/2">
                +91 92274 29149
              </a>
              <h1 className="text-lg font-semibold pt-4">Email:</h1>
              <a href="mailto:info@mirrorinstitute.com" className="w-1/2">
                info@mirrorinstitute.com
              </a>

              <a href="mailto:cbsemirror@gmail.com" className="w-1/2">
                cbsemirror@gmail.com
              </a>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold pt-4">Opening Hours:</h1>
              <p className="">
                Monday - Saturday: <br />
                10:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
