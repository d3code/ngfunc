import { TestBed } from '@angular/core/testing';

import { xpubConvert, XpubService } from './xpub.service';

describe('XpubService', () => {
  let service: XpubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XpubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('xpub should be converted to ypub', () => {
    const xpuby = xpubConvert('ypub', 'xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8');
    expect(xpuby).toEqual('ypub6QqdH2c5z7967BioGSfAWFHM1EHzHPBZK7wrND3ZpEWFtzmCqvsD1bgpaE6pSAPkiSKhkuWPCJV6mZTSNMd2tK8xYTcJ48585pZecmSUzWp');
  });

  it('ypub should be converted to xpub', () => {
    const ypubx = xpubConvert('xpub', 'ypub6QqdH2c5z7967BioGSfAWFHM1EHzHPBZK7wrND3ZpEWFtzmCqvsD1bgpaE6pSAPkiSKhkuWPCJV6mZTSNMd2tK8xYTcJ48585pZecmSUzWp');
    expect(ypubx).toEqual('xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8');
  });

  it('xpub should be converted to zpub', () => {
    const zpub = xpubConvert('zpub', 'xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8');
    expect(zpub).toEqual('zpub6jftahH18ngZxUuv6oSniLNrBCSSE1B4EEU59bwTCEt8x6aS6b2mdfLxbS4QS53g85SWWP6wexqeer516433gYpZQoJie2tcMYdJ1SYYYAL');
  });
});
