import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "NodeJs",
        educator: "Dani",
        duration: 10

    });

    CreateCourseService.execute({
        name: "React",
        educator: "Diego",
        duration: 22

    });

    return response.send();
}