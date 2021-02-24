package com.rest.API.Exception;

public class GlobalErrorException extends Exception{
    private String errorMessage;
    public GlobalErrorException(String errorMessage) {
        super(errorMessage);
    }
}
