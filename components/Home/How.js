import Image from "next/image";
import { howusBasics, howusGoals, howusOlympiad, howusTasklist } from "../../public/images";

export default function HowUs() {
    return (
        <div className="w-full p-5 mt-36">
            <div className="w-full p-5 lg:w-3/4 mx-auto flex flex-col lg:flex-row">
                <span className="my-auto">
                    <Image src={howusGoals} alt="How" />
                </span>
                <span className="lg:w-8/12">
                    <h1 className=" font-extrabold text-3xl mb-5 text-primary">How does mirror work to achieve the goals of the students?</h1>
                    <p className="my-3 font-medium">Best Teaching method to make students understand the concepts.</p>
                    <p className="my-3 font-medium">Everyday Worksheets to make the students digest the concepts which are taught everyday in the classroom.</p>
                    <p className="my-3 font-medium">Regular Chpater-wise Testing/ Revision Testing/ School-exam Base Testing to evaluate students' progress and to build their confidence.</p>
                    <p className="my-3 font-medium">Well-Organized and Well-Advanced schedulling of teaching pedagogy, worksheets and testing.</p>
                    <p className="my-3 font-medium">We help the parents to understand the strengths and the weakness of their wardnesses of their wards to help thier ward choose it' field of interest in higher secondary.</p>
                    <p className="my-3 font-medium">We always Support and Stand with every child to achieve his/her dream.</p>
                </span>
            </div>
            <div className="w-full p-5 lg:w-3/4 mx-auto flex lg:flex-row-reverse flex-col lg:mt-10">
                <span className="my-auto lg:w-5/12 p-14">
                    <Image src={howusBasics} alt="How" />
                </span>
                <span className="lg:w-6/12">
                    <h1 className=" font-extrabold text-3xl mb-5 text-primary">Extra Care to develop Basic Concepts for std 1st to 5th :</h1>
                    <p className="my-3 font-medium">Regular rivision of Maths concepts in worksheets to make the foundation of students very strong.</p>
                    <p className="my-3 font-medium">Regular Table Writing practice to develop strong calculation power.</p>
                    <p className="my-3 font-medium">Compulsory Reading of Story Books for lucid reading skills and grasping grammar concepts.</p>
                    <p className="my-3 font-medium">Weekly Presentation for developing Speaking Skills.</p>
                </span>
            </div>
            <div className="w-full p-5 lg:w-3/4 mx-auto flex flex-col lg:flex-row 2xl:-mt-5">
                <span className="2xl:-mt-16 lg:w-5/12 p-10">
                    <Image src={howusTasklist} alt="How" />
                </span>
                <span className="lg:w-6/12">
                    <h1 className=" font-extrabold text-3xl mb-5 text-primary">Why is mirror different than other Home/Personal Tuition Classes?</h1>
                    <p className="my-3 font-medium">School-wise and Standard-wise different classroom.</p>
                    <p className="my-3 font-medium">Subject-wise Well-Trained and Experienced faculties.</p>
                    <p className="my-3 font-medium">Regular Parents' Meeting and Personal Parents' Meeting based on parents' requirements.</p>
                    <p className="my-3 font-medium">Library for small kids to inculcate Reading Habit.</p>
                </span>
            </div>
            <div className="w-full p-5 lg:w-3/4 mx-auto flex lg:flex-row-reverse flex-col">
                <span className="2xl:-mt-24 lg:w-5/12 p-10">
                    <Image src={howusOlympiad} alt="How" />
                </span>
                <span className="lg:w-6/12">
                    <h1 className=" font-extrabold text-3xl mb-5 text-primary">Olympiad - IIT (Engineering) - NEET (Medical) Foundation</h1>
                    <p className="my-3 font-medium">Preparation of mathematics / science / English Olympiad (Std 1-8)</p>
                    <p className="my-3 font-medium">Preparation of Engineering / Medical foundation course (Std 9-10)</p>
                </span>
            </div>
        </div>
    )
}