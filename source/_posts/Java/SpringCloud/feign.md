---
date: 2020-11-01 00:00:00
updated: 2020-11-01 00:00:00
typora-root-url: ..\..
---


### Feign

```java
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import feign.codec.Decoder;
import feign.codec.Encoder;
import java.util.Arrays;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.cloud.openfeign.support.ResponseEntityDecoder;
import org.springframework.cloud.openfeign.support.SpringDecoder;
import org.springframework.cloud.openfeign.support.SpringEncoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

@Slf4j
@Configuration
public class CustomFeignConfig {
    @Bean
    public Decoder feignDecoder() {
        MappingJackson2HttpMessageConverter jacksonConverter =
                new MappingJackson2HttpMessageConverter(customObjectMapper());
        jacksonConverter.setSupportedMediaTypes(Arrays.asList(
                MediaType.ALL
        ));
        ObjectFactory<HttpMessageConverters> objectFactory =
                () -> new HttpMessageConverters(jacksonConverter);
        return new ResponseEntityDecoder(new SpringDecoder(objectFactory));
    }
    @Bean
    public Encoder feignEncoder() {
        MappingJackson2HttpMessageConverter jacksonConverter =
                new MappingJackson2HttpMessageConverter(customObjectMapper());
        jacksonConverter.setSupportedMediaTypes(Arrays.asList(
                MediaType.ALL
        ));
        ObjectFactory<HttpMessageConverters> objectFactory =
                () -> new HttpMessageConverters(jacksonConverter);
        return new SpringEncoder(objectFactory);
    }
    public ObjectMapper customObjectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        //Customize as much as you want
        objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
        return objectMapper;
    }
    
    @Bean
    public Logger.Level logger() {
        return Logger.Level.FULL;
    }
}
```