import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';
import {Ibook} from '../interfaces/ibook';
import {ActivatedRoute, Router} from '@angular/router';
import {CountriesService} from '../services/countries.service';
import {Book} from '../book';
import {Icountry} from '../interfaces/icountry';
import {Icity} from '../interfaces/icity';
import {Icompany} from '../interfaces/icompany';
import {CompaniesService} from '../services/companies.service';
import {CitiesService} from '../services/cities.service';
import {FormatsService} from '../services/formats.service';
import {Iformat} from '../interfaces/iformat';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

  book: Book = new Book();
  countries: Icountry[];
  cities: Icity[];
  companies: Icompany[];
  formats: Iformat[];

  constructor(
    private router: Router,
    private bookService: BooksService,
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private companiesService: CompaniesService,
    private citiesService: CitiesService,
    private formatService: FormatsService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (+id > 0) {
      this.bookService.getBook(id)
        .subscribe((res: Ibook) => {
          this.book = res;
        });
    }
    this.countriesService.getCountries().subscribe( (res: Icountry[]) => {
        this.countries = res;
      }
    );
    this.companiesService.getCompanies().subscribe( (res: Icompany[]) => {
        this.companies = res;
      }
    );
    this.citiesService.getCities().subscribe( (res: Icity[]) => {
        this.cities = res;
      }
    );
    this.formatService.getFormats().subscribe( (res: Icity[]) => {
        this.formats = res;
      }
    );
  }

  onSubmit() {
    this.bookService.save(this.book).subscribe((res: Ibook) => {
      if (res.id) {
        this.router.navigate([`book/${res.id}`]);
      }
    });
  }
}
