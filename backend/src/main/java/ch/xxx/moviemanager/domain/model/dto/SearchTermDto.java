/**
 *    Copyright 2019 Sven Loesekann
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
package ch.xxx.moviemanager.domain.model.dto;

import java.util.LinkedList;
import java.util.List;

public class SearchTermDto {
	private SearchPhraseDto searchPhraseDto;
	private List<SearchStringDto> searchStringDtos = new LinkedList<>();
	
	public SearchPhraseDto getSearchPhraseDto() {
		return searchPhraseDto;
	}
	public void setSearchPhraseDto(SearchPhraseDto searchPhraseDto) {
		this.searchPhraseDto = searchPhraseDto;
	}
	public List<SearchStringDto> getSearchStringDtos() {
		return searchStringDtos;
	}
	public void setSearchStringDtos(List<SearchStringDto> searchStringDtos) {
		this.searchStringDtos = searchStringDtos;
	}
}