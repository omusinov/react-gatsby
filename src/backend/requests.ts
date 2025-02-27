export const getConnectRequest = (username: string, password: string, datasource: string): string => {
  return `<?xml version='1.0' encoding='utf-8'?>
<soap:Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema'>
<soap:Body>
  <Execute xmlns='http://tempuri.org/'>
    <strXML>
      &lt;requestList LCID=&quot;en-US&quot; LCIDUI=&quot;en-US&quot;&gt;
        &lt;request&gt;
          &lt;serviceProvider&gt;OnBase%5cMFPs&lt;/serviceProvider&gt;
          &lt;action&gt;MfpSdk%5cConnect&lt;/action&gt;
          &lt;parameters&gt;
            &lt;parameter&gt;
              &lt;name&gt;datasource&lt;/name&gt;
              &lt;value&gt;${datasource}&lt;/value&gt;
            &lt;/parameter&gt;
            &lt;parameter&gt;
              &lt;name&gt;username&lt;/name&gt;
              &lt;value&gt;${username}&lt;/value&gt;
            &lt;/parameter&gt;
            &lt;parameter&gt;
              &lt;name&gt;password&lt;/name&gt;
              &lt;value&gt;${password}&lt;/value&gt;
            &lt;/parameter&gt;
            &lt;parameter&gt;
              &lt;name&gt;deviceId&lt;/name&gt;
              &lt;value&gt;tEN6t-L8B9T-UQWjF&lt;/value&gt;
            &lt;/parameter&gt;
            &lt;parameter&gt;
              &lt;name&gt;authenticationAgent&lt;/name&gt;
              &lt;value&gt;onbase&lt;/value&gt;
            &lt;/parameter&gt;
            &lt;parameter&gt;
              &lt;name&gt;omitConfigResponse&lt;/name&gt;
              &lt;value&gt;False&lt;/value&gt;
            &lt;/parameter&gt;
            &lt;parameter&gt;
              &lt;name&gt;licenseRequested&lt;/name&gt;
              &lt;value&gt;kmDispatcher&lt;/value&gt;
            &lt;/parameter&gt;
            &lt;parameter&gt;
              &lt;name&gt;deviceMac&lt;/name&gt;
              &lt;value&gt;CC483A6073C7~0A002700000D~00059A3C7A00~94E70BA6EDCA~94E70BA6EDCB~96E70BA6EDCA&lt;/value&gt;
            &lt;/parameter&gt;
          &lt;/parameters&gt;
          &lt;RequestSignature/&gt;
        &lt;/request&gt;
      &lt;/requestList&gt;
    </strXML>
  </Execute>
</soap:Body>
</soap:Envelope>`
}

export const getKeywordsRequest = (sessionId: string, docTypeId: string) => {
  return `<?xml version='1.0' encoding='utf-8'?>
<soap:Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema'>
	<soap:Body>
		<Execute xmlns='http://tempuri.org/'>
			<strXML>
				&lt;requestList LCID=&quot;en-US&quot; LCIDUI=&quot;en-US&quot;&gt;
					&lt;request&gt;
						&lt;serviceProvider&gt;OnBase%5cMFPs&lt;/serviceProvider&gt;
						&lt;action&gt;MfpSdk%5cGetKeywordGroupStructure&lt;/action&gt;
						&lt;authenticationToken&gt;
							&lt;parameters&gt;
								&lt;parameter&gt;
									&lt;name&gt;sessionId&lt;/name&gt;
									&lt;value&gt;${sessionId}&lt;/value&gt;
								&lt;/parameter&gt;
							&lt;/parameters&gt;
						&lt;/authenticationToken&gt;
						&lt;parameters&gt;
							&lt;parameter&gt;
								&lt;name&gt;docTypeId&lt;/name&gt;
								&lt;value&gt;${docTypeId}&lt;/value&gt;
							&lt;/parameter&gt;
						&lt;/parameters&gt;
						&lt;RequestSignature/&gt;
					&lt;/request&gt;
				&lt;/requestList&gt;
			</strXML>
		</Execute>
	</soap:Body>
</soap:Envelope>`
}

export const getDisconnectRequest = (sessionId: string) => {
  return `<?xml version='1.0' encoding='utf-8'?>
<soap:Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema'>
	<soap:Body>
		<Execute xmlns='http://tempuri.org/'>
			<strXML>
				&lt;requestList LCID=&quot;en-US&quot; LCIDUI=&quot;en-US&quot;&gt;
					&lt;request&gt;
						&lt;serviceProvider&gt;OnBase%5cMFPs&lt;/serviceProvider&gt;
						&lt;action&gt;MfpSdk%5cDisconnect&lt;/action&gt;
						&lt;parameters&gt;
							&lt;parameter&gt;
								&lt;name&gt;sessionId&lt;/name&gt;
								&lt;value&gt;${sessionId}&lt;/value&gt;
							&lt;/parameter&gt;
						&lt;/parameters&gt;
						&lt;RequestSignature/&gt;
					&lt;/request&gt;
				&lt;/requestList&gt;
			</strXML>
		</Execute>
	</soap:Body>
</soap:Envelope>`
}

export const getExpandDropDownRequest = (
  sessionId: string, 
  keyTypeId: string, 
  possibleValuesAllowed: number = 100,
  partialValue: string = '') => {

  return `<?xml version='1.0' encoding='utf-8'?>
<soap:Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema'>
	<soap:Body>
		<Execute xmlns='http://tempuri.org/'>
			<strXML>
				&lt;requestList LCID=&quot;en-US&quot; LCIDUI=&quot;en-US&quot;&gt;
					&lt;request&gt;
						&lt;serviceProvider&gt;OnBase%5cMFPs&lt;/serviceProvider&gt;
						&lt;action&gt;MfpSdk%5cExpandDropDown&lt;/action&gt;
						&lt;authenticationToken&gt;
							&lt;parameters&gt;
								&lt;parameter&gt;
									&lt;name&gt;sessionId&lt;/name&gt;
									&lt;value&gt;${sessionId}&lt;/value&gt;
								&lt;/parameter&gt;
							&lt;/parameters&gt;
						&lt;/authenticationToken&gt;
						&lt;parameters&gt;
							&lt;parameter&gt;
								&lt;name&gt;keyTypeId&lt;/name&gt;
								&lt;value&gt;${keyTypeId}&lt;/value&gt;
							&lt;/parameter&gt;
							&lt;parameter&gt;
								&lt;name&gt;possibleValuesAllowed&lt;/name&gt;
								&lt;value&gt;${possibleValuesAllowed}&lt;/value&gt;
							&lt;/parameter&gt;
							&lt;parameter&gt;
								&lt;name&gt;partialValue&lt;/name&gt;
								&lt;value&gt;${partialValue}&lt;/value&gt;
							&lt;/parameter&gt;
						&lt;/parameters&gt;
						&lt;RequestSignature/&gt;
					&lt;/request&gt;
				&lt;/requestList&gt;
			</strXML>
		</Execute>
	</soap:Body>
</soap:Envelope>`
}

export const getExpandSingleAutoFillRequest = (docTypeId: string, keyTypeId: string, keywordValue: string) => {
  return ``
}