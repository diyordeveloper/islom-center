import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TypeApiLang} from './TypeAllApi';
import axios from 'axios';
import {API_URL} from './Url';
import {TypeLangState} from '../lang/TypeLang';
import {useLangContext} from '../lang/LangContext';

export const AllApiCreateContext = createContext<TypeApiLang | null>(null);

export const useAllApiContext = () => {
  return useContext(AllApiCreateContext);
};

export const AllApiContext = ({children}: {children: ReactNode}) => {
  const {language} = useLangContext() as TypeLangState;
  // ------------------GET-------------------
  // NEW POST -------------
  const [newPosts, setNewPost] = useState<any>([]);
  function getNewPosts() {
    axios
      .get(`${API_URL}news_press_services`)
      .then(res => {
        setNewPost(res.data);
      })
      .catch(res => {
        console.log(`Error New Post - ${res}`);
      });
  }
  // CATALOGS ---------------
  const [catalogs, setCatalogs] = useState<any>([]);
  const [catalogsDATA, setCatalogsDATA] = useState<any>([]);

  function getCatalogs() {
    axios
      .get(`${API_URL}catalogs`)
      .then(res => {
        setCatalogs(res.data);
        setCatalogsDATA(res.data);
        // console.log(res.data);
      })
      .catch(res => {
        console.log(`Error Catalogs - ${res}`);
      });
  }
  // CATEGORY_BOOKS ---------------
  const [categoryBooks, setCategoryBooks] = useState<any>([]);
  function getCategoryBooks() {
    axios
      .get(`${API_URL}category_books`)
      .then(res => {
        setCategoryBooks(res.data);
        // console.log(`------------------------`);
        // console.log(res.data);
        // console.log(`------------------------`);
      })
      .catch(res => {
        console.log(`Error categoryBooks - ${res}`);
      });
  }
  // Media - Photo - Video - Audio ---------------
  const [mediaPhotos, setMediaPhotos] = useState<any>([]);
  // Photos
  function getMedia_Photos() {
    axios
      .get(`${API_URL}media_photos `)
      .then(res => {
        setMediaPhotos(res.data);
        // console.log('- - - - - - - - - - - - - - - - - - - - - - ');
        // console.log(res.data);
        // console.log('- - - - - - - - - - - - - - - - - - - - - - ');
      })
      .catch(res => {
        console.log(`Error Media Photos - ${res}`);
      });
  }
  const [mediaVideos, setMediaVideos] = useState<any>([]);
  // Video
  function getMedia_Videos() {
    axios
      .get(`${API_URL}media_videos `)
      .then(res => {
        setMediaVideos(res.data);
        // console.log('- - - - - - - - - - - - - - - - - - - - - - ');
        // console.log(res.data);
        // console.log('- - - - - - - - - - - - - - - - - - - - - - ');
      })
      .catch(res => {
        console.log(`Error Media Videos - ${res}`);
      });
  }

  const [mediaAudios, setMediaAudios] = useState<any>([]);
  // Audio
  function getMedia_Audios() {
    axios
      .get(`${API_URL}media_audio`)
      .then(res => {
        setMediaAudios(res.data);
        // console.log('- - - - - - - - - - - - - - - - - - - - - - ');
        // console.log(res.data);
        // console.log('- - - - - - - - - - - - - - - - - - - - - - ');
      })
      .catch(res => {
        console.log(`Error Media Audios - ${res}`);
      });
  }
  // UseEffect--------
  useEffect(() => {
    getNewPosts();
    getCatalogs();
    getCategoryBooks();
    getMedia_Photos();
    getMedia_Videos();
    getMedia_Audios();
  }, []);
  return (
    <AllApiCreateContext.Provider
      value={{
        newPosts,
        catalogs,
        setCatalogs,
        catalogsDATA,
        categoryBooks,
        mediaPhotos,
        mediaVideos,
        mediaAudios,
      }}>
      {children}
    </AllApiCreateContext.Provider>
  );
};
