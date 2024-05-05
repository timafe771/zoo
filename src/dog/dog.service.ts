import { Injectable } from '@nestjs/common';
// Dog Schema Model

@Injectable()
export class DogService {
    public getHello(): string {
        return 'WOW-WOW';
    }

    public introduce(): string{
        return 'My name is SERGEY!';
    }

    public modifyDetail(): string {
        return 'Successfully modified';
    }
}
