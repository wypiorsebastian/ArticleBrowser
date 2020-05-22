import {Byline} from './byline';
import {Keyword} from './keyword';
import {Headline} from './headline';
import {Multimedia} from './multimedia';



export interface Doc {
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    print_section: string;
    print_page: string;
    source: string;
    multimedia: Multimedia[];
    headline: Headline;
    keywords: Keyword[];
    pub_date: Date;
    document_type: string;
    news_desk: string;
    section_name: string;
    subsection_name: string;
    byline: Byline;
    type_of_material: string;
    _id: string;
    word_count: number;
    uri: string;
}