<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2864a4249e14c2fde83b2158247c63e8
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'MatthiasMullie\\PathConverter\\' => 29,
            'MatthiasMullie\\Minify\\' => 22,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'MatthiasMullie\\PathConverter\\' => 
        array (
            0 => __DIR__ . '/..' . '/matthiasmullie/path-converter/src',
        ),
        'MatthiasMullie\\Minify\\' => 
        array (
            0 => __DIR__ . '/..' . '/matthiasmullie/minify/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2864a4249e14c2fde83b2158247c63e8::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2864a4249e14c2fde83b2158247c63e8::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit2864a4249e14c2fde83b2158247c63e8::$classMap;

        }, null, ClassLoader::class);
    }
}
