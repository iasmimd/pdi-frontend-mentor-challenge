import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellphoneComponent } from './cellphone.component';

describe('CellphoneComponent', () => {
    let component: CellphoneComponent;
    let fixture: ComponentFixture<CellphoneComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CellphoneComponent]
        });
        fixture = TestBed.createComponent(CellphoneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
