import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
    transform(value, searchText: any): any {
        if (searchText == null) return value;

        return value.filter((element) => {
            return element.user.name.trim().toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1;
        })
    }
}

@Pipe({ name: 'search_user' })
export class UserPipe implements PipeTransform {
    transform(value, searchText: any): any {
        if (searchText == null) return value;

        return value.filter((element) => {
            return element.name.trim().toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1;
        })
    }
}