import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// Initialize the Angular testing environment
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

fdescribe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get the first name correctly', () => {
    const testName = 'Murshid';
    service.setFirstName(testName);
    const retrievedName = service.getFirstName();
    expect(retrievedName).toBe(testName);
  });
  
});
